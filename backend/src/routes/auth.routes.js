import express from "express";
import { register, login, getUsers } from "../controllers/auth.controller.js";

const router = express.Router();

/*
ROUTING LAYER

What is a route?

- A route defines HOW incoming HTTP requests are mapped to specific controller functions.
- It only decides "where should this request go?"

What is its responsibility?

- Match HTTP methods (GET, POST, PUT, DELETE)
- Match URL paths ("/login", "/register", "/users")
- Forward the request to the correct controller function

Why use a routing layer?

- Separates request handling from other logic.
- Allows multiple routes to reuse the same controllers.

So, the flow in a backend app is the following:

Route -> Controller -> Service -> Database
*/

router.post("/register", register);
router.post("/login", login);
router.get("/users", getUsers);

export default router;
