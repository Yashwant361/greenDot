GreenDot Classroom

Track daily GitHub contributions of students in a coding classroom.

GreenDot Classroom helps tutors monitor coding consistency by checking students' daily GitHub commit activity automatically instead of manually visiting every GitHub profile.

Features
Student Registration
Tutor Authentication (JWT)
GitHub Contribution Tracking
Daily Commit Monitoring
Subject-Based Filtering
Protected Dashboard
Real-Time GitHub API Integration
Contribution Status Tracking
Tech Stack
Frontend
React
Tailwind CSS
Fetch API
React Router DOM
Backend
Node.js
Express.js
JWT Authentication
GitHub GraphQL API
Database
MongoDB
Mongoose
Project Structure
greenDot/
│
├── frontend/
│
└── server/
Frontend Structure
frontend/
│
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   └── PageNotFound.jsx
│   │
│   ├── components/
│   │   └── Navbar.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   └── main.jsx
Backend Structure
server/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── server.js
└── .env
Environment Variables

Create .env inside server/

PORT=8085

MONGO_URI=your_mongodb_url

JWT_SECRET=your_secret_key

GITHUB_TOKEN=your_github_token
Installation
Clone Repository
git clone <your-repository-url>
Install Frontend
cd frontend
npm install
npm run dev
Install Backend
cd server
npm install
npm run dev
API Endpoints
Student Routes
Register Student
POST /students
Get All Students
GET /students
Auth Routes
Tutor Login
POST /auth/login
GitHub Routes
Get Daily Contributions
GET /github/:username

Example:

GET /github/Yashwant361
Dashboard Features
View all students
Track daily commits
Subject-wise filtering
Contribution completion status
GitHub username tracking
Contribution Status Logic
commit >= 6

✅ Completed

Else:

❌ Pending

Future Improvements
Contribution Streak Tracking
Charts & Analytics
Attendance System
Weekly Reports
Student Profiles
Mobile Responsive UI
Deployment
Dark/Light Theme
Leaderboard
Why This Project?

Teachers often manually check GitHub profiles of students to verify coding practice consistency.

GreenDot Classroom automates this process and provides a centralized dashboard for tracking student activity.

## Author

Built & Developed by RayTech Corp 🚀

## Contributors

* Ray (Project Lead & Full Stack Developer)
* Udhave Pingle
* Aditiya Singh
