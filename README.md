<!-- # GreenDot Classroom 

A full-stack GitHub contribution tracking system designed for teachers and coding mentors to monitor students' daily coding consistency.

This platform allows students to submit their GitHub usernames while teachers/admins can track daily contributions, commit streaks, and coding activity through GitHub GraphQL API integration.

## Features

* Track daily GitHub contributions
* Student contribution monitoring dashboard
* Daily commit target checking (6 commits/day)
* Clean API response for frontend integration
* GitHub GraphQL API integration
* Real-time contribution analytics
* Scalable full-stack architecture

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Use Fetch APIs instead of Axios 

### Backend

* Node.js
* Express.js
* MongoDB
* GitHub GraphQL API

## Current MVP

* Backend contribution tracking system completed
* GitHub API integration working
* Postman API testing completed

## Future Plans

* Admin dashboard
* Leaderboard system
* Streak tracking
* Automated reminders
* Analytics & charts
* Multi-classroom support

## Contributors

* Ray (Project Lead & Full Stack Developer)
* Udhave Pingle
* Aditiya Singh -->


# GreenDot Classroom 🚀

GreenDot Classroom is a MERN-based classroom contribution tracking system designed for coding mentors, tutors, and programming instructors.

The platform automatically tracks students' daily GitHub contributions and provides a centralized dashboard where tutors can monitor coding consistency without manually checking every GitHub profile.

---

# ✨ Features

- Student Registration System
- Tutor Authentication using JWT
- Protected Dashboard Routes
- GitHub Contribution Tracking
- Daily Commit Monitoring
- Subject-Based Filtering
- Real-Time GitHub GraphQL API Integration
- Contribution Completion Status
- Responsive Dashboard UI

---

# 🛠 Tech Stack

## Frontend
- React.js
- Tailwind CSS
- React Router DOM
- Fetch API

## Backend
- Node.js
- Express.js
- JWT Authentication
- GitHub GraphQL API

## Database
- MongoDB
- Mongoose

---

# 📁 Project Structure

```bash
greenDot/
│
├── frontend/
│
└── server/
```

---

# 📂 Frontend Structure

```bash
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
```

---

# 📂 Backend Structure

```bash
server/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── server.js
└── .env
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the `server/` directory.

```env
PORT=8085

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GITHUB_TOKEN=your_github_personal_access_token
```

---

# 🚀 Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone <your-repository-url>
```

---

## 2️⃣ Install Frontend Dependencies

```bash
cd frontend

npm install

npm run dev
```

---

## 3️⃣ Install Backend Dependencies

```bash
cd server

npm install

npm run dev
```

---

# 🔗 API Endpoints

## Student Routes

### Register Student

```http
POST /students
```

### Get All Students

```http
GET /students
```

---

## Authentication Routes

### Tutor Login

```http
POST /auth/login
```

---

## GitHub Routes

### Get Daily Contributions

```http
GET /github/:username
```

### Example

```http
GET /github/Yashwant361
```

---

# 📊 Dashboard Features

- View all registered students
- Monitor daily GitHub commits
- Filter students subject-wise
- Track coding consistency
- Identify completed/pending contribution targets

---

# ✅ Contribution Status Logic

```js
commit >= 6
```

- ✅ Completed
- ❌ Pending

---

# 🔮 Future Improvements

- Contribution Streak Tracking
- Charts & Analytics
- Weekly Reports
- Student Profiles
- Leaderboard System
- Attendance Integration
- Dark / Light Theme
- Fully Responsive Mobile UI
- Cloud Deployment

---

# 💡 Why GreenDot Classroom?

Programming instructors often spend significant time manually checking GitHub profiles to verify whether students are coding consistently.

GreenDot Classroom automates this workflow by providing a centralized contribution monitoring dashboard powered by the GitHub GraphQL API.

---

# 👨‍💻 Author

Built & Developed by **RayTech Corp** 🚀

## Contributors

* Yashwant Ray (Project Lead & Full Stack Developer)
* Udhave Pingle
* Aditiya Singh 