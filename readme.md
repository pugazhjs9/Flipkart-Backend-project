Here’s a simplified and improved version of your **README.md** file for the Flipkart Clone Backend:

---

# Flipkart Clone Backend

This project is the backend service for an Amazon clone application. It handles user authentication, song management (CRUD operations), and other essential features using **Node.js**, **SQL**, and **Prisma**.

## Features

- **User Authentication**: Signup and Signin with JWT-based authentication.
- **CRUD for Songs**: Create, read, update, and delete song entries.
- **Password Security**: Secure password hashing using `bcrypt`.
- **Prisma ORM**: Simplifies database operations with SQL databases.
- **JWT Tokens**: Used for user authentication and authorization.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express**: Web framework for Node.js.
- **Prisma**: ORM for interacting with SQL databases.
- **SQL Database**: MySQL or SQLite (or any SQL-compatible DB).
- **JWT**: For managing authentication tokens.
- **Bcrypt**: For password encryption.

## Getting Started

### Prerequisites

- **Node.js** installed.
- A **SQL Database** (e.g., MySQL, SQLite, etc.).
- **Prisma** installed and configured.
- **npm** or **yarn** for package management.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/amazon-clone-backend.git
   cd amazon-clone-backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file:
   ```bash
   touch .env
   ```
   Add the following variables to the `.env` file:
   ```bash
   DATABASE_URL="mysql://user:password@localhost:3306/your-database"
   JWT_SECRET="your-secret-key"
   ```

4. **Set up Prisma and the database**:
   Initialize Prisma and apply migrations:
   ```bash
   npx prisma init
   npx prisma migrate dev --name init
   ```

5. **Start the server**:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000`.

## API Endpoints

### Authentication Routes
- **POST** `/auth/signup`: Register a new user.
- **POST** `/auth/signin`: Log in and receive a JWT token.

### Song Routes
- **POST** `/songs`: Create a new song (requires authentication).
- **GET** `/songs`: Get all songs.
- **GET** `/songs/:id`: Get a specific song by ID.
- **PUT** `/songs/:id`: Update a song by ID (requires authentication).
- **DELETE** `/songs/:id`: Delete a song by ID (requires authentication).

## Example Requests and Responses

### Signup
- **Request**:
  ```json
  {
    "email": "user@example.com",
    "password": "Password123"
  }
  ```
- **Response**:
  ```json
  {
    "message": "User registered successfully",
    "user": {
      "id": 1,
      "email": "user@example.com"
    }
  }
  ```

### Signin
- **Request**:
  ```json
  {
    "email": "user@example.com",
    "password": "Password123"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Login successful",
    "token": "jwt-token-here"
  }
  ```

### Create Song
- **Request**:
  ```json
  {
    "title": "Shape of You",
    "artist": "Ed Sheeran",
    "duration": 233
  }
  ```
- **Response**:
  ```json
  {
    "message": "Song created successfully",
    "song": {
      "id": 1,
      "title": "Shape of You",
      "artist": "Ed Sheeran",
      "duration": 233
    }
  }
  ```

## Prisma Configuration

Ensure Prisma is properly configured in `prisma/schema.prisma`:

```prisma
datasource db {
  provider = "mysql" // or sqlite, etc.
  url      = env("DATABASE_URL")
}

model User {
  id       Int      @id @default(autoincrement())
  email    String   @unique
  password String
  songs    Song[]
}

model Song {
  id       Int      @id @default(autoincrement())
  title    String
  artist   String
  duration Int
  userId   Int
  user     User     @relation(fields: [userId], references: [id])
}
```
