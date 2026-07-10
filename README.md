

> A full‑stack task management web app built with the **MERN** stack (MongoDB, Express, React, Node) and **Tailwind CSS**.  
> Developed as a technical assignment for the **Full Stack Developer Intern** position at **COLL-EDGE CONNECT**.

---

## 🚀 Live Demo

| Frontend | Backend API |
|----------|-------------|
| [**resilient-pavlova-d573b0.netlify.app**](https://resilient-pavlova-d573b0.netlify.app/) | [**tasks-tracker-2.onrender.com/api/tasks**](https://tasks-tracker-2.onrender.com/api/tasks) |

> Click the badges above or the links to explore the live application.

---

## 📸 Screenshots

*(Add your own screenshots here – they make your project stand out!)*

---

## ✨ Features

### Core Features (Mandatory)
- ✅ **Create** – Add tasks with title, description, priority & due date
- ✅ **Read** – View all tasks with real‑time updates
- ✅ **Update** – Edit any existing task
- ✅ **Delete** – Remove tasks with a confirmation dialog
- ✅ **Form Validation** – Title is required; other fields are optional
- ✅ **RESTful API** – Clean, well‑structured endpoints
- ✅ **MongoDB Integration** – Persistent storage with Mongoose
- ✅ **Responsive UI** – Works seamlessly on mobile, tablet & desktop
- ✅ **Dynamic Updates** – No page refreshes (React state management)

### Bonus Features
- 🔍 **Search** – Filter tasks by title
- 🏷️ **Filter by Status** – All / Pending / Completed
- 📅 **Sort** – By Due Date or Priority
- 🔔 **Toast Notifications** – Instant feedback for every action
- 📊 **Dashboard Stats** – Total, Pending, Completed & High‑Priority counts
- 🎨 **Tailwind CSS** – Modern utility‑first styling
- 🎯 **Priority Badges** – Colour‑coded (High, Medium, Low)

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React.js, Tailwind CSS, Axios, React Icons, React Toastify |
| **Backend**  | Node.js, Express.js, MongoDB, Mongoose, Express Validator, CORS, Dotenv |
| **Deployment** | Frontend – Netlify, Backend – Render |


## 📁 Project Structure
task-tracker/
├── backend/
│ ├── .env
│ ├── package.json
│ ├── server.js
│ ├── models/
│ │ └── Task.js
│ └── routes/
│ └── taskRoutes.js
├── frontend/
│ ├── .env
│ ├── package.json
│ ├── tailwind.config.js
│ ├── postcss.config.js
│ ├── public/
│ │ └── index.html
│ └── src/
│ ├── index.js
│ ├── index.css
│ ├── App.js
│ ├── api.js
│ └── components/
│ ├── DashboardStats.js
│ ├── TaskForm.js
│ ├── TaskFilters.js
│ └── TaskList.js
└── README.md
