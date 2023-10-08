# Contact Management App Express & MongoDB Rest API 

This project contains a Contact Management App built using Express.js and MongoDB. The app provides a REST API that allows users to manage their contacts, including creating, updating, deleting, and retrieving contact information.

## Features

- Create a new contact with details such as name, email, phone number, etc.
- Update an existing contact's information.
- Delete a contact from the database.
- Retrieve a list of all contacts or get details for a specific contact.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- MongoDB server up and running, or a MongoDB Atlas cluster.

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone git@github.com:geekyharsh05/mycontact-api-backend.git
   ```

2. Navigate to the project directory:

    ```bash
    cd mycontact-api-backend
    ```

3. Install the required npm packages:

    ```bash
    npm install
    ```

4. Create a .env file in the project root and configure the MongoDB connection URL:
    
    ```bash
    MONGODB_URI=your-mongodb-connection-uri
    ```

5. Start the server:
 
    ```bash
    npm run
    ```
5. The API should now be running locally.

## API Endpoints

- **GET /contacts**: Retrieve a list of all contacts.
- **GET /contacts/:id**: Retrieve details for a specific contact by ID.
- **POST /contacts**: Create a new contact.
- **PUT /contacts/:id**: Update contact information by ID.
- **DELETE /contacts/:id**: Delete a contact by ID.

## Usage

You can use tools like Postman, Insomnia, or your browser's developer tools to interact with the API. Here are some example API requests:

- **GET /contacts**: Retrieve all contacts.
- **GET /contacts/5f7b30e7220657839c2baaec**: Retrieve details for a contact with ID `5f7b30e7220657839c2baaec`.
- **POST /contacts**:
  
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "123-456-7890"
  }
  ```

## Contributing

Contributions are welcome! If you find any issues or want to add enhancements to the app, feel free to open a pull request.

## License

This project is licensed under the MIT License.