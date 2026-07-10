📋 Task Tracker – MERN Stack Application

A modern Full-Stack Task Management Web Application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js) with Tailwind CSS for a responsive and clean user interface.

This project was developed as part of a Full Stack Developer Internship Assignment, demonstrating CRUD operations, REST APIs, authentication, filtering, sorting, and responsive UI design.

🚀 Live Demo
Service	Link
🌐 Frontend	https://resilient-pavlova-d573b0.netlify.app
⚡ Backend API	https://tasks-tracker-3.onrender.com
📌 Project Overview

Task Tracker helps users organize and manage daily tasks efficiently.

Each authenticated user can:

Create personal tasks
Update task details
Delete tasks
Search tasks instantly
Filter tasks by status
Sort tasks by priority or due date
View dashboard statistics

The application provides a smooth user experience with real-time updates and a responsive design.

✨ Features
🔐 Authentication
User Registration
Secure Login
Password Encryption using bcryptjs
User Session stored in Local Storage
User-specific Tasks
✅ Task Management
Create New Task
Edit Existing Task
Delete Task
Mark Task as Pending or Completed
Set Due Date
Add Description
Set Priority (High / Medium / Low)
🔍 Search & Filter
Search Tasks by Title
Filter Tasks by Status
All
Pending
Completed
📅 Sorting

Sort tasks by:

Due Date
Priority
📊 Dashboard

Real-time dashboard displaying:

Total Tasks
Pending Tasks
Completed Tasks
High Priority Tasks
🔔 Notifications

React Toastify notifications for

Task Created
Task Updated
Task Deleted
Error Handling
📱 Responsive Design

Fully responsive interface built with Tailwind CSS.

Supports

Desktop
Tablet
Mobile Devices
🛠 Tech Stack
Frontend
React.js
Tailwind CSS
Axios
React Router DOM
React Icons
React Toastify
Backend
Node.js
Express.js
MongoDB
Mongoose
Express Validator
bcryptjs
CORS
dotenv
Deployment
Platform	Service
Frontend	Netlify
Backend	Render
Database	MongoDB Atlas
📁 Project Structure
task-tracker
│
├── backend
│   ├── models
│   │      Task.js
│   │      Writer.js
│   │
│   ├── routes
│   │      taskRoutes.js
│   │      writerRoutes.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend
│   ├── public
│   ├── src
│   │
│   ├── components
│   │      Navbar.js
│   │      TaskForm.js
│   │      TaskFilters.js
│   │      TaskList.js
│   │      DashboardStats.js
│   │      LoginPage.js
│   │      SignupComp.js
│   │
│   ├── pages
│   │      HomePage.js
│   │
│   ├── api.js
│   ├── App.js
│   └── index.js
│
└── README.md
📸 Screenshots

Add screenshots here after deployment.

Login Page
Signup Page
Dashboard
Create Task
Edit Task
Mobile View
⚙ Installation
Clone Repository
git clone https://github.com/Sagarkhatarkar12/task-tracker-frontend.git
Install Dependencies
Backend
cd backend
npm install
Frontend
cd frontend
npm install
Environment Variables
Backend (.env)
PORT=5000
Frontend (.env)
REACT_APP_API_URL=https://tasks-tracker-3.onrender.com/api
Run Project
Backend
npm start
Frontend
npm start
🔥 API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Get All Tasks
POST	/api/tasks	Create Task
PUT	/api/tasks/:id	Update Task
DELETE	/api/tasks/:id	Delete Task
POST	/api/login	Login User
POST	/api/register	Register User
🎯 Highlights
Full MERN Stack Project
User Authentication
Protected User-specific Tasks
CRUD Operations
RESTful API
MongoDB Atlas Integration
Responsive UI
Dashboard Analytics
Search, Filter & Sort
Toast Notifications
Deployed on Netlify & Render
👨‍💻 Developer

Sagar Khatarkar

📧 Email: sagarkhatarkar12@gmail.com
💻 GitHub: https://github.com/Sagarkhatarkar12
🌐 Project Repository: https://github.com/Sagarkhatarkar12/task-tracker-frontend
