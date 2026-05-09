**ClubPenguin.js**
```jsx
import React, { useState, useEffect } from 'react';

function ClubPenguin() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [user, setUser] = useState({ name: '', password: '' });
  const [loginError, setLoginError] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    // Fetch user data from server if user is logged in
    if (isUserLoggedIn) {
      fetch('/api/user')
        .then(response => response.json())
        .then(data => setUser(data));
    }
  }, [isUserLoggedIn]);

  const handleLogin = () => {
    // Validate user input
    if (user.name && user.password) {
      // Simulate login request to server
      fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ name: user.name, password: user.password }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            setIsUserLoggedIn(true);
            setLoginError(false);
          } else {
            setLoginError(true);
          }
        });
    } else {
      setLoginError(true);
    }
  };

  const handleLogout = () => {
    // Simulate logout request to server
    fetch('/api/logout')
      .then(() => {
        setIsUserLoggedIn(false);
        setUser({ name: '', password: '' });
      });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="club-penguin">
      <header>
        <nav>
          <ul>
            <li onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'active' : ''}>
              Home
            </li>
            <li onClick={() => handlePageChange('Login')} className={currentPage === 'Login' ? 'active' : ''}>
              Login
            </li>
            <li onClick={() => handlePageChange('Register')} className={currentPage === 'Register' ? 'active' : ''}>
              Register
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {currentPage === 'Home' && <Home />}
        {currentPage === 'Login' && <Login />}
        {currentPage === 'Register' && <Register />}
      </main>
      <footer>
        <p>&copy; 2023 Club Penguin</p>
      </footer>
    </div>
  );
}

function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to Club Penguin!</h1>
      <p>This is the home page.</p>
      <div className="featured-game">
        <h2>Featured Game: Puffle Launch</h2>
        <img src="puffle-launch.png" alt="Puffle Launch" />
        <p>Get ready to blast off into the stratosphere!</p>
      </div>
      <div className="game-list">
        <h2>Popular Games</h2>
        <ul>
          <li>
            <img src="puffle-launch.png" alt="Puffle Launch" />
            Puffle Launch
          </li>
          <li>
            <img src="penguin-sled.png" alt="Penguin Sled" />
            Penguin Sled
          </li>
          <li>
            <img src="penguin-pizza.png" alt="Penguin Pizza" />
            Penguin Pizza
          </li>
        </ul>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <form>
        <label>
          Name:
          <input type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
        </label>
        <label>
          Password:
          <input type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
        </label>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        {loginError && <p style={{ color: 'red' }}>Invalid username or password</p>}
      </form>
    </div>
  );
}

function Register() {
  return (
    <div className="register-page">
      <h1>Register</h1>
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <button type="button">Register</button>
      </form>
    </div>
  );
}

export default ClubPenguin;
```