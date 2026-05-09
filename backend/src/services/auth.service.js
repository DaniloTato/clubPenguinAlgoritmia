import { pool } from "../config/db.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.js";

/*
SERVICE LAYER

What is a service?

- A service is where the BUSINESS LOGIC lives (where we process data to fulfill its purpose).
- It is not responsible for handling HTTP requests/responses.
- It only focuses on the core of the app logic.

Why use services?

- Helps creating clean code
- Modularity (Divide and conquer)
- Makes logic reusable (can be used by multiple routes)
- Easier to test.

So, the flow in a backend app is the following:

Route -> Controller -> Service -> Database
*/

export const registerUser = async ({ email, password }) => {
  const hashed = await bcrypt.hash(password, 10);

  await pool.query("INSERT INTO users (email, password) VALUES (?, ?)", [
    email,
    hashed,
  ]);

  return { message: "User created" };
};

export const loginUser = async ({ email, password }) => {
  const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [
    email,
  ]);

  const user = rows[0];
  if (!user) throw new Error("User not found");
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error("Invalid password");
  const token = generateToken(user);
  return { token };
};

export const getAllUsers = async () => {
  const [rows] = await pool.query("SELECT id, email FROM users");

  return rows;
};
