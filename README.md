# <img src="https://cdn.prod.website-files.com/6105315644a26f77912a1ada/63eea844ae4e3022154e2878_Holberton-p-800.png" width="150" /> - HBNB Project - Cohort C#25  
The HBnB project at Holberton is a simplified full-stack clone of Airbnb. It covers various aspects of software development, including backend, database management, front-end integration, and deployment.

---

### 📘 [Part 1: UML Diagrams](https://github.com/MaKSiiMe/holbertonschool-hbnb/tree/main/Part1)  
We started the development of the HBnB Evolution application by creating a detailed blueprint. This technical documentation compiles essential diagrams and explanations, serving as a comprehensive guide to the system’s architecture, design, and implementation steps, from user interactions to database operations.  

#### Key Points:  
1. [High-level architecture](https://github.com/MaKSiiMe/holbertonschool-hbnb/blob/main/Part1/0-%20High-Level_Package_Diagram.md) with a package diagram outlining the three layers and the use of the **Facade Pattern**.

2. [Detailed diagrams of the business logic layer](https://github.com/MaKSiiMe/holbertonschool-hbnb/blob/main/Part1/1-%20Detailed_Class_Diagram_for_Business_Logic_Layer.md) illustrating key entities, their relationships, and their role in the system.

3. [Sequence diagrams for key API interactions](https://github.com/MaKSiiMe/holbertonschool-hbnb/blob/main/Part1/2-%20Sequence_diagram_for_API_calls.md) depicting critical operations such as:  
    - [User registration](https://github.com/MaKSiiMe/holbertonschool-hbnb/blob/main/Part1/2-%20Sequence_diagram_for_user_registration.md)  
    - [Place creation](https://github.com/MaKSiiMe/holbertonschool-hbnb/blob/main/Part1/2-%20Sequence_diagram_for_place_creation.md)  
    - [Review submission](https://github.com/MaKSiiMe/holbertonschool-hbnb/blob/main/Part1/2-%20Sequence_diagram_for_review_submission.md)  
    - [Fetching places](https://github.com/MaKSiiMe/holbertonschool-hbnb/blob/main/Part1/2-%20Sequence_diagram_for_fetching_a_list_of_places.md)  

---

### ⚙️ Part 2: Business Logic & API  
The **Business Logic (BL) Layer** and **API** are key components of the HBnB system, ensuring efficient handling of user requests and data processing. This section details how the business logic is structured and how the API provides a seamless interface for external interactions.  

#### 🔹 Business Logic Layer  
- Implements core functionalities such as **user authentication, property management, and review processing**.
- Uses **object-oriented programming (OOP)** principles to encapsulate logic and enforce data consistency.
- Interacts with the **database layer** to store and retrieve information efficiently.
- Implements error handling to ensure **data integrity** and **robust performance**.

#### 🔹 API Implementation  
- Built using **Flask** as a lightweight framework to handle HTTP requests and responses.
- Follows **RESTful principles**, making it scalable and easy to interact with.
- Provides **CRUD operations** for major entities such as **Users, Places, and Reviews**.
- Implements **JWT authentication** for secure access control.

#### 🌍 API Endpoints Overview  
| HTTP Method | Endpoint | Description |
|------------|---------|-------------|
| `GET` | `/api/v1/users` | Retrieve all users |
| `POST` | `/api/v1/users` | Create a new user |
| `GET` | `/api/v1/users/<user_id>` | Retrieve a specific user |
| `PUT` | `/api/v1/users/<user_id>` | Update user details |
| `DELETE` | `/api/v1/users/<user_id>` | Delete a user |
| `GET` | `/api/v1/places` | Retrieve all places |
| `POST` | `/api/v1/places` | Create a new place |
| `GET` | `/api/v1/places/<place_id>` | Retrieve a specific place |
| `PUT` | `/api/v1/places/<place_id>` | Update place details |
| `DELETE` | `/api/v1/places/<place_id>` | Delete a place |
| `GET` | `/api/v1/reviews` | Retrieve all reviews |
| `POST` | `/api/v1/reviews` | Submit a new review |
| `GET` | `/api/v1/reviews/<review_id>` | Retrieve a specific review |
| `PUT` | `/api/v1/reviews/<review_id>` | Update a review |
| `DELETE` | `/api/v1/reviews/<review_id>` | Delete a review |

---
# <img src="https://cdn.prod.website-files.com/6105315644a26f77912a1ada/63eea844ae4e3022154e2878_Holberton-p-800.png" width="150" /> - HBNB Project - Cohort C#25  
The HBnB project at Holberton is a simplified full-stack clone of Airbnb. It covers various aspects of software development, including backend, database management, front-end integration, and deployment.

---
# HBnB Project - Part 3: Enhanced Backend with Authentication and Database Integration

Welcome to Part 3 of the HBnB project! In this section, you will enhance the backend of the application by integrating user authentication, implementing role-based authorization, and transitioning from in-memory storage to a relational database using SQLAlchemy and SQLite for development. Later, you'll configure MySQL for production environments. This part will set the foundation for a secure, scalable, and production-ready backend system.

## Objectives

### 1. **Authentication and Authorization:**
   - Implement JWT-based user authentication using **Flask-JWT-Extended**.
   - Implement role-based access control (RBAC) using the `is_admin` attribute for specific endpoints.

### 2. **Database Integration:**
   - Replace in-memory storage with **SQLite** for development using **SQLAlchemy** as the ORM.
   - Prepare the system for **MySQL** or other production-grade RDBMS.

### 3. **CRUD Operations with Database Persistence:**
   - Refactor all CRUD operations to interact with the new persistent database (SQLite during development, MySQL for production).

### 4. **Database Design and Visualization:**
   - Design and visualize the database schema using **mermaid.js**.
   - Ensure correct relationships between entities like Users, Places, Reviews, and Amenities.

### 5. **Data Consistency and Validation:**
   - Enforce data validation and constraints within the database models to ensure consistency.

---

## Structure of the Project

The tasks in this part of the project are organized progressively to help you build a complete, secure, and database-backed backend system:

1. **Modify the User Model to Include Password:**
   - Modify the User model to securely store passwords using **bcrypt2** and update the user registration process.

2. **Implement JWT Authentication:**
   - Secure the API by implementing JWT tokens. Only authenticated users should be able to access protected endpoints.

3. **Implement Authorization for Specific Endpoints:**
   - Implement role-based access control (RBAC) to restrict certain actions to administrators.

4. **SQLite Database Integration:**
   - Transition from in-memory storage to **SQLite** as the persistent database during development.

5. **Map Entities Using SQLAlchemy:**
   - Map existing entities (User, Place, Review, Amenity) to the database using **SQLAlchemy** and define relationships correctly.

6. **Prepare for MySQL in Production:**
   - Towards the end of this phase, configure the application to use **MySQL** in production environments while using **SQLite** for development.

7. **Database Design and Visualization:**
   - Use **mermaid.js** to create entity-relationship diagrams (ERDs) for the database schema and ensure all relationships are properly visualized.

---

## Final Deliverables

- A backend system with JWT-based authentication and role-based access control.
- A database-backed system with persistent storage using SQLite and preparation for MySQL deployment.
- A well-designed and visualized relational database schema.
- A secure, scalable, and production-ready backend ready for further enhancements.

---

# HBnB v2 - Simple Web Client
## Description
This project is part of the **HBnB v2** curriculum, focusing on front-end development using **HTML5, CSS3, and JavaScript ES6**. The goal is to create an interactive web client that interacts with the back-end services developed in previous phases of the HBnB project.
## Objectives
- Develop a user-friendly interface following provided design specifications.
- Implement client-side functionality to interact with the back-end API.
- Ensure secure and efficient data handling using JavaScript.
- Apply modern web development practices to create a dynamic web application.
## Learning Goals
- Understand and apply **HTML5, CSS3, and JavaScript ES6** in a real-world project.
- Learn to interact with back-end services using **AJAX/Fetch API**.
- Implement authentication mechanisms and manage user sessions.
- Use client-side scripting to enhance user experience without page reloads.
## Features & Tasks
### 1. Design
- Complete the provided HTML and CSS files to match the given design specifications.
- Create pages for:
  - **Login Form**
  - **List of Places**
  - **Place Details**
  - **Add Review**
### 2. Login
- Implement login functionality using the back-end API.
- Store the **JWT token** returned by the API in a **cookie** for session management.
- Redirect users to the main page upon successful login.
- Display an error message if login fails.
### 3. List of Places
- Implement the main page to display a list of available places.
- Fetch places data from the API and implement **client-side filtering**.
- Redirect unauthorized users to the login page.
### 4. Place Details
- Implement a detailed view of a place.
- Fetch detailed information from the API.
- Display a form for adding a review if the user is authenticated.
### 5. Add Review
- Implement a form allowing authenticated users to leave a review.
- Ensure unauthenticated users are redirected to the login page.
## Technologies Used
- **HTML5** (Semantic structure)
- **CSS3** (Responsive design)
- **JavaScript ES6** (Client-side scripting)
- **Fetch API** (AJAX requests)
- **JWT Authentication** (User session management)
## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/ginftls/holbertonschool-hbnb
   cd holbertonschool-hbnb/part4
   ```
2. Open the project folder in a code editor.
3. Serve the files locally (e.g., using **Live Server** extension in VS Code).
4. Modify the **API endpoint** in `scripts.js` to match your back-end URL.
5. Test the web client functionalities:
   - Login with valid credentials
   - Fetch and display places
   - View place details
   - Submit a review (if authenticated)
## Notes
- Ensure the back-end API allows **Cross-Origin Resource Sharing (CORS)**.
- All pages must pass the **W3C Validator** for HTML & CSS.


### 👤 Contributor:  
- [Giovanni Farias](https://github.com/ginftls)

