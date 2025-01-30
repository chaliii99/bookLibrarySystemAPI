# Book API

This is a simple Express API for managing a collection of books. It supports operations like creating, retrieving, updating, deleting, and searching books.

## Features
- **Authentication**: All endpoints require a valid authorization token in the header (Bearer token).
- **CRUD operations**: Perform Create, Read, Update, and Delete actions on books.
- **Search**: Search books based on title, author, or genre.

## Installation
1. Clone the repository
2. Install dependencies:
    ```sh
    npm install
    ```
3. Create a `.env` file in the root directory and add the following environment variables:
    ```
    PORT=3000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
    ```
4. Start the server:
    ```sh
    npm start
    ```

## API Endpoints

### Authentication
- **POST /api/auth/login**
    - Request Body:
        ```json
        {
            "email": "user@example.com",
            "password": "password"
        }
        ```
    - Response:
        ```json
        {
            "token": "jwt_token",
            "user": {
                "id": "user_id",
                "name": "John Doe",
                "email": "user@example.com"
            }
        }
        ```

- **POST /api/auth/register**
    - Request Body:
        ```json
        {
            "name": "John Doe",
            "email": "user@example.com",
            "password": "password"
        }
        ```
    - Response:
        ```json
        {
            "message": "User registered successfully",
            "token": "jwt_token",
            "user": {
                "id": "user_id",
                "name": "John Doe",
                "email": "user@example.com"
            }
        }
        ```

### Books
- **GET /api/books**
    - Headers: `Authorization: Bearer jwt_token`
    - Response:
        ```json
        [
            {
                "_id": "book_id",
                "title": "Book 1",
                "genre": "Fiction",
                "createdAt": "2021-09-01T00:00:00.000Z"
            },
            ...
        ]
        ```

- **GET /api/books/:id**
    - Headers: `Authorization: Bearer jwt_token`
    - Response:
        ```json
        {
            "_id": "book_id",
            "title": "Book 1",
            "genre": "Fiction",
            "createdAt": "2021-09-01T00:00:00.000Z"
        }
        ```

- **GET /api/books/search**
    - Headers: `Authorization: Bearer jwt_token`
    - Query Parameters: [title](http://_vscodecontentref_/1), `author`, [genre](http://_vscodecontentref_/2)
    - Response:
        ```json
        [
            {
                "_id": "book_id",
                "title": "Book 1",
                "genre": "Fiction",
                "createdAt": "2021-09-01T00:00:00.000Z"
            },
            ...
        ]
        ```

- **POST /api/books**
    - Headers: `Authorization: Bearer jwt_token`
    - Request Body:
        ```json
        {
            "title": "Book 1",
            "genre": "Fiction",
            "createdAt": "2021-09-01T00:00:00.000Z"
        }
        ```
    - Response:
        ```json
        {
            "_id": "book_id",
            "title": "Book 1",
            "genre": "Fiction",
            "createdAt": "2021-09-01T00:00:00.000Z"
        }
        ```

- **PUT /api/books/:id**
    - Headers: `Authorization: Bearer jwt_token`
    - Request Body:
        ```json
        {
            "title": "Updated Book Title",
            "genre": "Updated Genre",
            "createdAt": "2021-09-01T00:00:00.000Z"
        }
        ```
    - Response:
        ```json
        {
            "_id": "book_id",
            "title": "Updated Book Title",
            "genre": "Updated Genre",
            "createdAt": "2021-09-01T00:00:00.000Z"
        }
        ```

- **DELETE /api/books/:id**
    - Headers: `Authorization: Bearer jwt_token`
    - Response:
        ```json
        {
            "message": "deleted successfully!!"
        }
        ```

## License
This project is licensed under the MIT License.