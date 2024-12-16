# Bytive_ToDoAPI
Backend Endpoint creation of to-do

Here is repo link : https://github.com/Canisam/Bytive_ToDoAPI/

This file will guide users through the process of setting up and testing your backend REST API for the to-do list application.

---

# To-Do List API

This is a REST API for managing a simple to-do list application. It allows users to create, read, update, and delete tasks. The API is built with **Node.js** and **Express.js**, and it uses **MongoDB** for data storage.

---

## Features

- **Create a Task**: Add a new task with a title, description, and default status ("pending").
- **Get All Tasks**: Retrieve a list of all tasks.
- **Get Task by ID**: Retrieve a single task by its unique ID.
- **Update Task**: Change the status of a task (e.g., "pending", "in-progress", "completed").
- **Delete Task**: Remove a task from the database.

---

## Installation

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (Version 14.x or higher)
- MongoDB (Locally or using MongoDB Atlas)
- npm (Node Package Manager)

### Step 1: Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/canisam/Bytive_ToDoAPI.git
cd Bytive_ToDoAPI
```

### Step 2: Install Dependencies

Install the required dependencies by running the following command:

```bash
npm install
```

### Step 3: Set Up MongoDB

- **Local MongoDB**: If you're running MongoDB locally, ensure it is installed and running. By default, MongoDB listens on port `27017`.

- **MongoDB Atlas**: If you're using MongoDB Atlas, create a cluster and retrieve the connection string. Replace the `MONGO_URI` in the `.env` file with your MongoDB Atlas connection string.

### Step 4: Configure Environment Variables

Create a `.env` file in the root of the project and add your MongoDB connection URL. Example:

```
MONGO_URI=mongodb://localhost:27017/todo-list
PORT=5000
```

- **MONGO_URI**: MongoDB connection string (local or Atlas).
- **PORT**: Port for the server to run on (default: `5000`).

### Step 5: Start the Server

Run the following command to start the server:

```bash
npm start
```

The server should now be running on `http://localhost:5000`.

---

## API Endpoints

### 1. Create a Task

**Endpoint:** `POST /api/tasks`

**Request Body:**

```json
{
  "title": "Task Title",
  "description": "Task Description"
}
```

**Response:**

```json
{
  "_id": "some_id",
  "title": "Task Title",
  "description": "Task Description",
  "status": "pending",
  "__v": 0
}
```

---

### 2. Get All Tasks

**Endpoint:** `GET /api/tasks`

**Response:**

```json
[
  {
    "_id": "some_id",
    "title": "Task Title",
    "description": "Task Description",
    "status": "pending",
    "__v": 0
  }
]
```

---

### 3. Get Task by ID

**Endpoint:** `GET /api/tasks/:id`

**Response:**

```json
{
  "_id": "some_id",
  "title": "Task Title",
  "description": "Task Description",
  "status": "pending",
  "__v": 0
}
```

---

### 4. Update Task Status

**Endpoint:** `PUT /api/tasks/:id`

**Request Body:**

```json
{
  "status": "in-progress"
}
```

**Response:**

```json
{
  "_id": "some_id",
  "title": "Task Title",
  "description": "Task Description",
  "status": "in-progress",
  "__v": 0
}
```

---

### 5. Delete a Task

**Endpoint:** `DELETE /api/tasks/:id`

**Response:**

```json
{
  "message": "Task deleted"
}
```

---

## Testing the API

You can test the API using a tool like **Postman** or **cURL**. Here's an example for testing with **Postman**:

1. **Create Task**: Use the `POST` method to create a new task by sending a JSON body.
2. **Get Tasks**: Use the `GET` method to fetch all tasks.
3. **Get Task by ID**: Use the `GET` method with a specific task ID.
4. **Update Task**: Use the `PUT` method to update a task's status.
5. **Delete Task**: Use the `DELETE` method to delete a task.

---

## Conclusion

- This is a simple REST API for managing tasks, built with Node.js, Express, and MongoDB.
- You can easily extend this project by adding features like authentication, more detailed task management, or additional routes for user management.

---

