import * as authService from "../services/auth.service.js";

/*
CONTROLLER LAYER

What is a controller?

- A controller is the middle layer between Routes and Services.
- It handles HTTP-specific logic (req, res).
- It calls services to perform actual operations.

What is its responsibility?

- Receive request data (req.body, req.params, req.query)
- Handle HTTP responses (res.json, res.status)
- Handle errors and map them to HTTP status codes
- Call the appropriate service function

Why use controllers?

- Makes services reusable outside HTTP context
- Centralizes request/response and error handling

So, the flow in a backend app is the following:

Route -> Controller -> Service -> Database
*/

export const register = async (req, res) => {
  try {
    const user = await authService.registerUser(req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const result = await authService.loginUser(req.body);
    res.json(result);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await authService.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
