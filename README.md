# 🟢 GreenDot Classroom

A modern MERN stack classroom monitoring platform that tracks students' daily GitHub coding activity automatically.

GreenDot Classroom helps tutors and coding mentors monitor student consistency, coding discipline, and daily GitHub contribution activity through a centralized dashboard instead of manually checking multiple GitHub profiles.

---

# 🚀 Live Demo

## Frontend

https://green-dot-ig1j.vercel.app

## Backend API

https://greendot-ehhw.onrender.com

---

# ✨ Features

* 🔐 JWT Protected Tutor Authentication
* 👨‍🎓 Student Registration System
* 📊 GitHub Daily Contribution Tracking
* 📅 Daily Commit Monitoring
* 📚 Subject-Based Student Filtering
* 🧠 Reusable Component Architecture
* ⚡ Real-Time GitHub API Integration
* 🌐 Fully Deployed MERN Stack Application
* 📱 Responsive Dashboard UI
* 🛡️ Protected Routes
* 🔄 CI/CD Deployment Workflow

---

# 🏗️ Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM

## Backend

* Node.js
* Express.js
* JWT Authentication
* GitHub GraphQL API

## Database

* MongoDB Atlas
* Mongoose

## Deployment

* Vercel (Frontend)
* Render (Backend)

---

# 📁 Project Architecture

```bash
greenDot/
│
├── frontend/
│   │
│   ├── src/
│   │   │
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── StudentTable.jsx
│   │   │   ├── StudentRow.jsx
│   │   │   ├── Loading.jsx
│   │   │   └── EmptyState.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── PageNotFound.jsx
│   │   │
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   ├── studentService.js
│   │   │   └── githubService.js
│   │   │
│   │   ├── hooks/
│   │   │   └── useStudents.js
│   │   │
│   │   ├── routes/
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── utils/
│   │   │   └── constants.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   │
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── db/
│   ├── config/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🔑 Environment Variables

## Backend `.env`

```env
PORT=8085

MONGO_URL=your_mongodb_connection_string

JWT_SECRET=your_secret_key

ADMIN_EMAIL=your_admin_email

ADMIN_PASSWORD=your_admin_password

GITHUB_TOKEN=your_github_personal_access_token
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Yashwant361/greenDot.git
```

---

## 2️⃣ Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## 3️⃣ Backend Setup

```bash
cd server

npm install

npm run dev
```

Backend runs on:

```bash
http://localhost:8085
```

---

# 📡 API Endpoints

## Authentication

### Tutor Login

```http
POST /auth/login
```

---

## Students

### Register Student

```http
POST /students
```

### Get All Students

```http
GET /students
```

---

## GitHub

### Get Daily Contributions

```http
GET /github/:username
```

Example:

```http
GET /github/Yashwant361
```

---

# 📊 Contribution Status Logic

```js
commits >= 6
```

✅ Completed

Else:

❌ Pending

---

# 🔥 Deployment Workflow

## Frontend Deployment

* Vercel

## Backend Deployment

* Render

## Database Hosting

* MongoDB Atlas

---

# 🧠 What I Learned From This Project

* MERN Stack Architecture
* API Integration
* GitHub GraphQL API
* JWT Authentication
* Production Deployment
* CI/CD Workflow
* Protected Routes
* Reusable React Components
* Custom React Hooks
* Frontend Service Layer Architecture
* Debugging Production Build Issues
* MongoDB Atlas Configuration
* Vercel + Render Deployment Pipeline

---

# 🚀 Future Improvements

* 📈 Weekly Contribution Charts
* 🏆 Student Leaderboard
* 📊 Analytics Dashboard
* 🔍 Search & Pagination
* 📅 Attendance Tracking
* 🔔 Notifications System
* 👨‍🏫 Multiple Classroom Support
* 📱 Mobile Optimized UI
* 🌙 Dark / Light Theme
* 🤖 AI-Based Coding Analytics

---

# 👨‍💻 Author

Developed by RayTech Corp 🚀

GitHub:
https://github.com/Yashwant361

---

# ⭐ Support

If you found this project useful, consider giving it a star ⭐ on GitHub.
