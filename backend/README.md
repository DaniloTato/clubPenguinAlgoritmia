# MySQL Database Setup Guide

This guide explains how to create a MySQL database, create a `users` table, and configure environment variables for a Node.js backend.

---

# 1. Open MySQL CLI

First, log into MySQL from your terminal:

```bash
mysql -u root -p
```

Enter your password when prompted.
If it is your first time using it, the password is likely to be an empty string. In that case, just press enter.

# 2. Create the Database

Create the database your app will use:

```sql
CREATE DATABASE clubPenguin;
```

Select it:

```sql
USE clubPenguin;
```

# 3. Create a MySQL User (if not already created)

**Be thoughtful on the data you'll enter as the user and password**

We'll need that later...

```sql
CREATE USER 'appUser'@'localhost' IDENTIFIED BY 'password';
```

```sql
GRANT ALL PRIVILEGES ON clubPenguin.* TO 'appUser'@'localhost';
FLUSH PRIVILEGES;
```

# 4. Create the Users Table

Run the following:

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

# 5. Verify Table Creation

```sql
SHOW TABLES;
DESCRIBE users;
```

# 6. Create .env File

In the backend **project root**, create a file called:

`.env`

May as well do it using the `touch` command if you are using mac or linux.

```bash
touch .env
```

Then, add the following content:

```
JWT_SECRET=myKEY

DB_HOST=localhost
DB_USER=appUser
DB_PASSWORD=password
DB_NAME=clubPenguin
```

- Never commit .env to GitHub
- Add .env to your .gitignore, ALWAYS.
