# Bike Registration System Using Spring Boot and Angular

## Overview
The **Bike Registration System** is a full-stack web application that enables users to register bikes, manage their personal profiles, and securely store bike-related data. The backend is powered by **Spring Boot**, while the frontend is built with **Angular**. The application uses **RESTful APIs** to facilitate seamless communication between the client and server, ensuring a responsive and efficient user experience.

## Features
- **User Registration & Authentication**: Secure user registration and login functionality.
- **Bike Registration**: Users can easily register bikes and manage their bike information.
- **Profile Management**: Users can update personal details and manage profiles.
- **Role-Based Access Control**: Ensures only authorized users have access to specific functionalities.
- **RESTful APIs**: Efficient data exchange between frontend and backend.
- **Data Persistence**: MySQL database is used for structured and reliable storage of user and bike data.

## Technologies Used
- **Backend**: Spring Boot, Java
- **Frontend**: Angular, TypeScript, HTML, CSS
- **Database**: MySQL
- **API**: RESTful services
- **Security**: Role-based access control, Authentication

## Installation

### Prerequisites
- **Java 8+**
- **Node.js and npm**
- **MySQL**

### Backend (Spring Boot)

1. Clone the repository:
   ```bash
   git clone https://github.com/akshay-kamath/bike-registration-system-using-spring-boot-and-angular.git
   cd bike-registration-system-using-spring-boot-and-angular/backend
  ```

2. Install dependencies and run the backend:
   ```bash
   ./mvnw install
   ./mvnw spring-boot:run
  ```

3.Configure MySQL

1. Create a database named `bike_registration_system`.
2. Update the `application.properties` file with your MySQL credentials:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/bike_registration_system
   spring.datasource.username=your_username
   spring.datasource.password=your_password
  ```

### Frontend (Angular)

1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
  ```

2. Install dependencies and run the Angular app:
   ```bash
  npm install
  ng serve
  ```
  
