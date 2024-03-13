# User Management API

This Node.js application provides a simple API for managing user data. It allows you to perform basic CRUD operations (Create, Read, Update, Delete) on user records.

#### Deployed link - https://tutorial5-jxgl.onrender.com

Use postman to test the APIs

## Endpoints

### Get All Users

- **Endpoint:** `/users`
- **Method:** `GET`
- **Description:** Retrieves all users from the database.
- **Success Response:**
  - **Code:** 200
  - **Content:** 
    ```json
    {
      "message": "Users retrieved",
      "success": true,
      "users": [
        {
          "id": "1",
          "email": "user1@example.com",
          "firstName": "John"
        },
        {
          "id": "2",
          "email": "user2@example.com",
          "firstName": "Jane"
        }
      ]
    }
    ```
- **Error Response:**
  - **Code:** 404
  - **Content:** `{ "message": "No users found", "success": false }`

### Get User by ID

- **Endpoint:** `/user/:id`
- **Method:** `GET`
- **Description:** Retrieves a user by their ID.
- **Success Response:**
  - **Code:** 200
  - **Content:** 
    ```json
    {
      "message": "User retrieved",
      "success": true,
      "user": {
        "id": "1",
        "email": "user1@example.com",
        "firstName": "John"
      }
    }
    ```
- **Error Response:**
  - **Code:** 404
  - **Content:** `{ "message": "User not found", "success": false }`

### Add User

- **Endpoint:** `/add`
- **Method:** POST
- **Description:** Adds a new user.
- **Request Body:**
    ```json
    {
      "email": "example@example.com",
      "firstName": "John"
    }
    ```
- **Success Response:**
    ```json
    {
      "message": "User added",
      "success": true
    }
    ```
- **Error Response:**
    ```json
    {
      "message": "Missing email or firstName",
      "success": false
    }
    ```

### Update User

- **Endpoint:** `/update/:id`
- **Method:** PUT
- **Description:** Updates an existing user.
- **Request Body:**
    ```json
    {
      "email": "updated@example.com",
      "firstName": "Updated"
    }
    ```
- **Success Response:**
    ```json
    {
      "message": "User updated",
      "success": true
    }
    ```
- **Error Responses:**
    ```json
    {
      "message": "User not found",
      "success": false
    }
    ```
    ```json
    {
      "message": "Missing email or firstName",
      "success": false
    }
    ```

## Dependencies

- Express.js
- uuid

