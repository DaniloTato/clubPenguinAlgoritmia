import { useState } from "react";
import { login, register, getUsers } from "../api/auth";
import Header from "../components/Header/Header.tsx";
import "./AuthPage.css";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState<any[]>([]);
  const [token, setToken] = useState("");

  async function handleRegister() {
    const res = await register(email, password);
    alert(JSON.stringify(res));
  }

  async function handleLogin() {
    const res = await login(email, password);
    setToken(res.token);
    alert("Logged in!");
  }

  async function loadUsers() {
    const res = await getUsers();
    setUsers(res);
  }

  return (
    <>
      <Header />
      <div className="auth-container">
        <div className="penguin-card">
          <h1>Club Penguin Login</h1>

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="buttons">
            <button onClick={handleRegister}>Register</button>
            <button onClick={handleLogin}>Login</button>
          </div>

          {token && (
            <div className="token-box">
              <p>JWT Token:</p>
              <code>{token}</code>
            </div>
          )}

          <button onClick={loadUsers} className="users-btn">
            Load Penguins
          </button>

          <div className="users-list">
            {users.map((u) => (
              <div key={u.id} className="user-card">
                {u.email}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
