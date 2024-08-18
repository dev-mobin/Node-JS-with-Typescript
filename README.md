This project is a simple CRUD API built with Node.js, TypeScript, Mongoose (MongoDB ORM), and Express.

Features
TypeScript support
Mongoose integration with MongoDB
RESTful API for basic CRUD operations
Environment configuration using .env
Lightweight and fast
Prerequisites
Before you begin, ensure you have the following installed on your machine:

Node.js (v14 or above)
MongoDB (local instance or MongoDB Atlas account)
npm or yarn
Project Setup
1. Clone the repository
bash
Copy code
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Install dependencies
bash
Copy code
npm install
or

bash
Copy code
yarn install
3. Set up environment variables
Create a .env file in the root of your project and add the following values:

bash
Copy code
MONGO_URI=mongodb://localhost:27017/your-db-name
PORT=5000
Replace your-db-name with the name of your MongoDB database.
If using MongoDB Atlas, use your connection string for MONGO_URI.
4. Build and Run the Project
To run the project in development mode with TypeScript compilation:

bash
Copy code
npm run dev
For production:

bash
Copy code
npm run build
npm start
5. Folder Structure
bash
Copy code
├── src
│   ├── controllers
│   │   └── user.controller.ts
│   ├── models
│   │   └── user.model.ts
│   ├── routes
│   │   └── user.routes.ts
│   ├── services
│   │   └── user.service.ts
│   ├── app.ts
│   └── server.ts
├── .env
├── package.json
└── tsconfig.json
6. API Endpoints
Below are the available CRUD routes for the user resource:

Create User

POST /api/users
Payload: { "name": "John Doe", "email": "john@example.com", "age": 30 }
Get All Users

GET /api/users
Get User by ID

GET /api/users/:id
Update User

PUT /api/users/:id
Payload: { "name": "Jane Doe" }
Delete User

DELETE /api/users/:id
7. Scripts
npm run dev - Starts the development server with hot reloading using ts-node-dev.
npm run build - Compiles TypeScript to JavaScript in the dist directory.
npm start - Starts the production server from the compiled dist directory.
8. Dependencies
express - Fast, unopinionated, minimalist web framework for Node.js
mongoose - MongoDB object modeling for Node.js
typescript - TypeScript language for type safety
dotenv - Loads environment variables from a .env file
ts-node-dev - TypeScript execution environment with hot-reloading for development
9. Dev Dependencies
@types/express - Type definitions for Express
@types/mongoose - Type definitions for Mongoose
@types/node - Type definitions for Node.js
10. License
This project is licensed under the MIT License. See the LICENSE file for details.

