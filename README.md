# Todo List

## Overview

This project is a simple todo list application built using React for the frontend and Spring Boot for the backend.

- **Frontend**: The frontend is developed using React with Vite, JavasScript as the programming language, Tailwind CSS for styling and Axios is used for sending HTTP requests to the backend.

- **Backend**: Spring Boot (Java) is used to create the backend, it provides a RESTful API that handles requests for task operations like getting, adding, updating and deleting tasks. Maven is used for project management and build processes.

- **Database**: MySQL is used as the database for this project, with the backend communicating to MySQL to perform database operations.

## Features

- Users can create, edit, and delete tasks.
- Tasks are organized in categories.
- Users can mark tasks as completed.
- Responsive design for mobile and desktop.

## Technologies Used

- Frontend:

  - React
  - Tailwind CSS
  - Axios
  - Vite

- Backend:

  - Spring Boot
  - Maven

- Database:
  - MySQL

## Screenshots

Below are screenshots of the Todo List project, there are more screenshots in the `screenshots` folder.

<img src="./screenshots/ss1.png" alt="Screenshot of Todo List" />
<img src="./screenshots/ss5.png" alt="Screenshot of the update form" />
<img src="./screenshots/ss3.png" width="300" alt="Screenshot of Todo List on mobile" />
<img src="./screenshots/ss4.png" width="300" alt="Screenshot of the expandable sidebar on mobile" />
<img src="./screenshots/ss7.png" width="300" alt="Screenshot of the update form on mobile" />

## Setup

To get the todo list project running locally:

1. **Clone the Repository**

2. **Frontend Setup**:

   - Navigate to the `frontend` directory.
   - Install necessary dependencies by running `npm install`.
   - Start the development server with Vite using `npm run dev`.

3. **Backend Setup**:

   - Navigate to the `backend` directory.
   - Build the project with Maven by running `mvn clean install`.
   - Start the backend server.

4. **Database Configuration**:

   - Update the `application.properties` file in the backend project with your database credentials.

5. **Access the Application**:
   - Open your web browser and navigate to `http://localhost:5173` (or the port you have configured) to interact with the project.
