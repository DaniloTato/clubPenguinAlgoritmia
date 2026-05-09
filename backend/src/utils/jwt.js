import jwt from "jsonwebtoken";

/*
Generates a JSON Web Token (JWT) for a user.
 
What is happening here?
 
- We are "signing" a payload (user data) to create a token.
- The token is later used to verify the user's identity.
 
Secret KEY
 
- The JWT_SECRET is NOT something the browser knows.
- It is a private key that ONLY exists on the backend server.
- The browser never sees this secret.

Why do we need a secret key?
 
- It is used to cryptographically sign the token.
- This ensures the token cannot be tampered with.
- If someone modifies the token in the browser, verification will fail.

How browsers interact with this:
 
- The browser receives the generated token after login.
- It stores it (usually in localStorage or cookies).
- On future requests, it sends the token back to the backend.
- The backend verifies it using the same JWT_SECRET.

Is the key required for the backend to run?
 
- No. The backend can technically run without JWT at all.
- JWT is just a feature for authentication/authorization.
- If you remove it, the server will still work without having this layer of security.
*/

export const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};
