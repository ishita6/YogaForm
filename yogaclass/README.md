# This is a simple React component for a Yoga Class Admission Form. 
Users can input their name, age, and select a preferred class batch. The form data is then submitted to a backend API for processing.Installation

To use this component in your React application, follow these steps:
1 . Install the required dependencies: npm install react axios
# Usage
The AdmissionForm component consists of a form where users can enter their name, age, and select a preferred class batch. The entered data is then submitted to a backend API using the Axios library.
Form Fields:
Name: Input field for the user's name.
Age: Input field for the user's age.
Select Batch: Dropdown menu to choose a preferred class batch.
Backend Integration
In this , the form data is sent to http://localhost:8000/api/enroll using a POST request. Adjust the API endpoint according to your backend setup.
# This is a simple Node.js and Express.js API for managing enrollments for a yoga class. The API uses MongoDB as a database to store user enrollment data.
# Installation
Make sure you have Node.js and MongoDB installed on your machine.
Install the required npm packages: npm install express cors body-parser mongoose
# Database Setup
The API connects to a MongoDB database named yogaClasses. Ensure that MongoDB is running locally on the default port (27017), or update the connection string in the main function of server.js accordingly.
# API Endpoints
1. Welcome Message
Endpoint: /
Method: GET
Description: Displays a welcome message indicating the successful functioning of the Yoga Classes API.
2. Enrollment
Endpoint: /api/enroll
Method: POST
Description: Accepts enrollment data (name, age, selectedBatch) as a JSON payload and saves it to the MongoDB database.
