# Task Management REST API

A RESTful API for managing tasks and projects built with Node.js, Express, MongoDB, JWT, and bcrypt.

---

## Features

- CRUD operations for tasks and projects
- JWT-based authentication
- Role-based access (Admin / User / Member)
- Input validation
- Logging with Winston
- Security headers with Helmet
- Rate limiting
- Swagger Documentation

---

## Project Structure

```
src/
├─ config/
│  └─ db.js
├─ controllers/
│  └─ taskController.js
├─ middlewares/
│  ├─ authMiddleware.js
│  ├─ validationMiddleware.js
│  └─ errorMiddleware.js
├─ models/
│  ├─ Task.js
│  ├─ Project.js
│  └─ User.js
├─ routes/
│  ├─ taskRoutes.js
│  ├─ projectRoutes.js
│  └─ userRoutes.js
├─ services/
│  ├─ taskService.js
│  └─ projectService.js
├─ utils/
│  └─ logger.js
├─ validations/
│  └─ taskValidation.js
docs/
└─ swagger.json
server.js
.env
```

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/USERNAME/task-management-rest-api.git
cd task-management-rest-api
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root:

```env
PORT=5000
DB_URL=mongodb://localhost:27017/taskdb
JWT_SECRET=your_secret_key
```

---

## Running the Server

Start the server in development mode:

```bash
npm run dev
```

API Base URL: `http://localhost:5000`

Swagger Documentation: `http://localhost:5000/api-docs`

---

## Main Endpoints

### Users
- **POST** `/api/users/register` – Register a new user
- **POST** `/api/users/login` – Login

### Tasks
- **GET** `/api/tasks` – Get all tasks
- **POST** `/api/tasks` – Create a new task
- **PUT** `/api/tasks/:id/status` – Update task status
- **DELETE** `/api/tasks/:id` – Delete task (Admin only)

### Projects
- CRUD operations similar to tasks

---

## Security
- JWT authentication
- Role-based access control
- Helmet and CORS
- Rate limiting
- Input validation

---

## Logging
- Winston for request and error logging
- Log files: `logs/error.log`, `logs/combined.log`

---

## Author

Your Name
