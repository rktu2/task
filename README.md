# Task Manager API Documentation

This is a simple RESTful API for managing tasks. It supports basic CRUD operations (Create, Read, Update, Delete).

## Endpoints

### Create a Task

- URL: `/api/v1/create-task`
- Method: `POST`
- Request Body:
  ```json
  {
    "name": "Task Title",
    "description": "Task Description",
    "tag": "tag name"
  }
  ### Update a Task

- URL: `/api/v1/update-task/:id`
- Method: `PATCH`
- Request Body:
  ```json
  {
    "name": "Task Title",
    "description": "Task Description",
    "tag": "tag name"
  }
  ### DELETE a Task

- URL: `api/v1/delete-task/:id`
- Method: `delete`
- Request Body:
  ```json
 {
    "task deleted
 }
 ### get all Task

- URL: `/api/v1/get-all-task`
- Method: `GET`
- Request Body:
  ```json
  {
    "name": "Task Title",
    "description": "Task Description",
    "tag": "tag name"
  }

  ### get all Taskby Id

- URL: `/api/v1/get-taskById/:id`
- Method: `GET`
- Request Body:
  ```json
  {
    "name": "Task Title",
    "description": "Task Description",
    "tag": "tag name"
  }

# Task Manager API Documentation

This is a simple RESTful API for managing user authentication. It supports basic and login register with jwt token


## Endpoints

### user register

- URL: `/api/v1//register`
- Method: `POST`
- Request Body:
  ```json
  {
    "name": "name",
    "email": "email",
    "password": "password"
  }
  ### user register

- URL: `/api/v1//login`
- Method: `POST`
- Request Body:
  ```json
  {
    
    "email": "email",
    "password": "password"
  }