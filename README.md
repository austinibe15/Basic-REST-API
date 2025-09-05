# Task 4: Build a Basic REST API

This project introduces the fundamentals of building a RESTful API using Node.js and the Express framework. To create a functional API that supports CRUD (Create, Read, Update, Delete) operations for a "User" entity. Each user will have basic properties such as name, email, and age. The API's functionality will be thoroughly tested using Postman.

## Project Overview

The objective of this task is to:

*   **Learn Node.js Basics:**  Understand how to set up and run a Node.js application.
*   **Design a REST API:**  Follow RESTful principles to design API endpoints for managing user data.
*   **Utilize Express Framework:**  Implement API routes and handle HTTP requests and responses using Express.js.
*   **Handle JSON Data:**  Efficiently process and send JSON data for API requests and responses.
*   **Test with Postman:**  Validate the API's behavior and ensure all CRUD operations work as expected.

## Skills Developed

Upon successful completion of this task, One will be proficient in:

*   **Node.js Basics:**  Core concepts and execution environment.
*   **REST API Design:**  Principles of statelessness, resource-based URLs, and standard HTTP methods.
*   **Express Framework:**  Setting up an Express server, defining routes, and middleware.
*   **JSON Handling:**  Parsing incoming JSON requests and formatting JSON responses.
*   **Postman Testing:**  Effectively using Postman to send requests and verify API responses.

## Getting Started

*(This section is a placeholder. Please fill it in with specific instructions for setting up and running your project.)*

### Prerequisites

*   Node.js and npm (or yarn) installed on your machine.
*   A code editor (e.g., VS Code, Sublime Text).

### Installation

1.  Clone this repository to your local machine:
    ```bash
    git clone <your-repository-url>
    cd task4-basic-rest-api
    ```
2.  Install the project dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

### Running the API

1.  Start the Node.js server:
    ```bash
    npm start
    ```
    or
    ```bash
    yarn start
    ```
    The API will typically run on `http://localhost:<PORT>`, where `<PORT>` is defined in your project (e.g., 3000).

## API Endpoints

The API supports the following endpoints for managing User resources:

*(Please replace the example URLs and descriptions with the actual ones from your project.)*

| Method | URL           | Description                     | Request Body (JSON)                                 | Response Body (JSON)                                          |
| :----- | :------------ | :------------------------------ | :-------------------------------------------------- | :------------------------------------------------------------ |
| `POST` | `/users`      | Create a new user               | `{ "name": "John Doe", "email": "john@example.com", "age": 30 }` | `{ "id": "generated_id", "name": "John Doe", ... }` (created user) |
| `GET`  | `/users`      | Get all users                   | -                                                   | `[ { "id": "...", "name": "...", ... }, ... ]` (array of users) |
| `GET`  | `/users/:id`  | Get a single user by ID         | -                                                   | `{ "id": "...", "name": "...", ... }` (single user object)    |
| `PUT`  | `/users/:id`  | Update a user by ID             | `{ "name": "Jane Doe", "email": "jane@example.com", "age": 31 }` | `{ "id": "...", "name": "Jane Doe", ... }` (updated user)     |
| `DELETE`| `/users/:id` | Delete a user by ID             | -                                                   | `{ "message": "User deleted successfully" }`                  |

## Testing with Postman

1.  Open Postman.
2.  Make sure your API server is running (refer to "Running the API" section).
3.  For each endpoint listed above, create a new request in Postman:
    *   Select the appropriate HTTP **Method**  (`GET`, `POST`, `PUT`, `DELETE`).
    *   Enter the **URL**  (e.g., `http://localhost:3000/users`).
    *   For `POST` and `PUT` requests, navigate to the "Body" tab, select "raw", and choose "JSON" from the dropdown. Then, enter the required JSON payload.
    *   For requests with an ID (e.g., `/users/:id`), add the ID to the URL.
4.  Click "Send" and observe the response to verify the API's behavior.

## Contributing

*(Optional section for contribution guidelines if this is a collaborative project.)*

## Contact austinibe15@gmail.com





