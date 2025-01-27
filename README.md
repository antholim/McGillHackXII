# CASPer Simulation Platform

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The CASPer Simulation Platform is a web application designed to simulate CASPer test scenarios. It allows users to practice answering situational judgment test questions and receive feedback on their responses.

## Features
- User authentication and authorization
- CASPer test simulation with various scenarios
- Real-time feedback on user responses
- Admin panel for managing questions and users
- Responsive design for mobile and desktop

## Technologies Used
- **Frontend**: React, React Router, Material-UI, Auth0
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT, bcrypt
- **Styling**: CSS, CSS Modules

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/ConUNony/casper-simulation-platform.git
    cd casper-simulation-platform
    ```

2. Install dependencies for both frontend and backend:
    ```bash
    cd Backend
    npm install
    cd ../Frontend
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the `Backend` directory with the following content:
        ```plaintext
        MONGO_CONNECTION_STRING=<your_mongo_connection_string>
        JWT_ACCESS_SECRET=<your_jwt_secret>
        ```
    - Create a `auth_config.json` file in the `Frontend/src` directory with the following content:
        ```json
        {
          "domain": "dev-fzkfxnygjmq02nja.us.auth0.com",
          "clientId": "csorfINVjIU95c9dKHJMt0eXUpKvmHYz",
          "audience": "{yourApiIdentifier}"
        }
        ```

4. Start the backend server:
    ```bash
    cd Backend
    npm start
    ```

5. Start the frontend development server:
    ```bash
    cd ../Frontend
    npm start
    ```

## Usage
1. Open your browser and navigate to `http://localhost:5173`.
2. Register a new account or log in with an existing account.
3. Start a new CASPer test simulation and answer the questions.
4. Receive feedback on your responses.

## API Endpoints

### Authentication
- **POST** `/register`: Register a new user
- **POST** `/login`: Log in an existing user
- **POST** `/verifyToken`: Verify JWT token

### User Input
- **POST** `/user-input`: Submit user input for CASPer scenarios

## File Structure
