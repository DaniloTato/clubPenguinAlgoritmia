# Club Penguin Full Stack Dev

A fun little full-stack project inspired by the nostalgic world of Club Penguin, built to learn the fundamentals of modern web development.

> “You are as beautiful as the day I lost you.”

# Why does this exist?

This project was built as a reference for people beginning their journey into web development, or for those who already understand some parts of the stack and want to see how everything connects together in a full-stack application.

# What's in here

- Frontend that uses React
- Backend using Node.js + Express
- Connection of frontend and backend through REST APIs
- Creation of MySQL database
- Using JWT authentication
- Understanding clean architecture and project structure

# Tech Stack

## Frontend

- React
- Vite
- TypeScript
- CSS

## Backend

- Node.js
- Express
- MySQL
- JWT
- bcrypt

# Project Structure

```bash
.
├── backend
│   ├── app.js
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   ├── schemas
│   │   └── users.sql
│   ├── server.js
│   └── src
│       ├── config
│       │   └── db.js
│       ├── controllers
│       │   └── auth.controller.js
│       ├── routes
│       │   └── auth.routes.js
│       ├── services
│       │   └── auth.service.js
│       └── utils
│           └── jwt.js
│
├── frontend
│   ├── src
│   └── ...
│
└── README.md
```

# Running the Project

The project is separated into two parts:

- Frontend (React + Vite)
- Backend (Node.js + Express + MySQL)

**You must run both at the same time.**

## Frontend Setup

Open a terminal **inside the frontend** folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide a local URL similar to:

```
http://localhost:5173
```

Open it in your browser.

## Backend Setup

Open another terminal **inside the backend** folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Before running the backend, follow the instructions inside:

```bash
backend/README.md
```

This includes:

- Creating the MySQL database
- Running the SQL schema
- Creating the .env file
- Adding your database credentials
- Adding your JWT secret

Once everything is configured, start the backend server:

```bash
node server.js
```

The backend server should start on something similar to:

```bash
http://localhost:3000
```

## Example .env File

```
JWT_SECRET=mySuperSecretKey

DB_HOST=localhost
DB_USER=appUser
DB_PASSWORD=password
DB_NAME=clubPenguin
```
