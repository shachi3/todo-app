
# TODO List Application

## Project Description

This is a simple TODO list application with a backend API built using Node.js and MongoDB, and a frontend UI built with ReactJS. The application allows users to create, list, and edit to-do items.

## Prerequisites

- Node.js and npm
- MongoDB

## Setup Instructions

### Backend

1. **Clone the repository**
   ```bash
   git clone https://github.com/shachi3/todo-app.git
   cd todo-app/server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start MongoDB**
   Ensure MongoDB is installed and running. You can start it using the following command if installed locally:
   ```bash
   mongod
   ```

4. **Start the backend server**
   ```bash
   node app.js
   ```

### Frontend

1. **Navigate to the client directory**
   ```bash
   cd ../client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the frontend server**
   ```bash
   npm start
   ```

### API Endpoints

- **Create ToDo**
  - Method: `POST`
  - URL: `http://localhost:5000/api/todo`
  - Body (JSON):
    ```json
    {
        "title": "Sample TODO",
        "startDate": "2023-06-24",
        "endDate": "2023-06-30"
    }
    ```
  - Response (JSON):
    ```json
    {
        "_id": "60d21b2f67d0d8992e610c85",
        "title": "Sample TODO",
        "startDate": "2023-06-24T00:00:00.000Z",
        "endDate": "2023-06-30T00:00:00.000Z",
        "__v": 0
    }
    ```

- **List ToDos**
  - Method: `GET`
  - URL: `http://localhost:5000/api/todos`
  - Response (JSON):
    ```json
    [
        {
            "_id": "60d21b2f67d0d8992e610c85",
            "title": "Sample TODO",
            "startDate": "2023-06-24T00:00:00.000Z",
            "endDate": "2023-06-30T00:00:00.000Z",
            "__v": 0
        }
    ]
    ```

- **Edit ToDo**
  - Method: `PUT`
  - URL: `http://localhost:5000/api/todo/:id`
  - Body (JSON):
    ```json
    {
        "title": "Updated TODO",
        "startDate": "2023-06-24",
        "endDate": "2023-06-30"
    }
    ```
  - Response (JSON):
    ```json
    {
        "_id": "60d21b2f67d0d8992e610c85",
        "title": "Updated TODO",
        "startDate": "2023-06-24T00:00:00.000Z",
        "endDate": "2023-06-30T00:00:00.000Z",
        "__v": 0
    }
    ```

### Postman Collection

To make it easier to test the API, you can import the provided Postman collection:

1. **Save the Collection JSON**
   Copy the following JSON and save it as `TODO_List_API.postman_collection.json`:

    ```json
    {
        "info": {
            "name": "TODO List API",
            "description": "Collection for TODO List API",
            "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
        },
        "item": [
            {
                "name": "Create TODO",
                "request": {
                    "method": "POST",
                    "header": [],
                    "body": {
                        "mode": "raw",
                        "raw": "{\"title\": \"Sample TODO\",\"startDate\": \"2023-06-24\",\"endDate\": \"2023-06-30\"}",
                        "options": {
                            "raw": {
                                "language": "json"
                            }
                        }
                    },
                    "url": {
                        "raw": "http://localhost:5000/api/todo",
                        "protocol": "http",
                        "host": [
                            "localhost"
                        ],
                        "port": "5000",
                        "path": [
                            "api",
                            "todo"
                        ]
                    }
                },
                "response": []
            },
            {
                "name": "List TODOs",
                "request": {
                    "method": "GET",
                    "header": [],
                    "url": {
                        "raw": "http://localhost:5000/api/todos",
                        "protocol": "http",
                        "host": [
                            "localhost"
                        ],
                        "port": "5000",
                        "path": [
                            "api",
                            "todos"
                        ]
                    }
                },
                "response": []
            },
            {
                "name": "Edit TODO",
                "request": {
                    "method": "PUT",
                    "header": [],
                    "body": {
                        "mode": "raw",
                        "raw": "{\"title\": \"Updated TODO\",\"startDate\": \"2023-06-24\",\"endDate\": \"2023-06-30\"}",
                        "options": {
                            "raw": {
                                "language": "json"
                            }
                        }
                    },
                    "url": {
                        "raw": "http://localhost:5000/api/todo/:id",
                        "protocol": "http",
                        "host": [
                            "localhost"
                        ],
                        "port": "5000",
                        "path": [
                            "api",
                            "todo",
                            ":id"
                        ]
                    }
                },
                "response": []
            }
        ]
    }
    ```

2. **Import the Postman Collection**
   - Open Postman and click on the `Import` button in the top-left corner.
   - Select the `TODO_List_API.postman_collection.json` file you saved.
   - The collection will be imported and available in the `Collections` tab.

### Folder Structure

```
todo-app/
├── server/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── Todo.js
│   ├── routes/
│   │   └── todo.js
│   ├── app.js
│   └── package.json
└── client/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── TodoForm.js
    │   │   ├── TodoList.js
    │   ├── App.js
    │   └── index.js
    ├── package.json
```
### Conclusion

By following these instructions, you should be able to set up and run the TODO list application locally. Ensure that both the backend and frontend servers are running, and use Postman to test the API endpoints. If you encounter any issues, please refer to the documentation or seek help in the project repository.
