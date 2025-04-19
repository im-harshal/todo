# 📝 Full-Stack Todo App

A simple Todo application built with:

- **Frontend**: Next.js (TypeScript)
- **Backend**: Node.js + Express
- **Database**: MongoDB (Atlas)

---

## 🚀 Features

- Add, complete, and delete todos
- Connected to MongoDB for data persistence
- Full-stack architecture using RESTful API

---

## 📁 Project Structure

```bash
/frontend   → Next.js frontend
/backend    → Express + MongoDB backend
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

### 2.Backend Setup

```bash
cd backend
npm install
```

🔐 Create .env in /backend

```bash
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/todos
```

```bash
npm start
```

Server runs at http://localhost:3050

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

Frontend runs at http://localhost:3000

🧠 Notes

- MongoDB is used via MongoDB Atlas.
- Make sure your IP is whitelisted and you’ve created a user for DB access.
