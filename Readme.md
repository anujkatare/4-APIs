# 📘 Chapter Performance API

A simple **Node.js + Express** REST API that demonstrates:
- JWT authentication
- Query-based filtering
- Pagination
- Bulk JSON handling (without database)

This project is useful for learning **backend fundamentals**, especially **filters, query params, and authorization**.

---

## 🚀 Features

- ✅ API health check
- ✅ Get chapters with filters
- ✅ Pagination using `page` and `limit`
- ✅ JWT-based authorization for POST route
- ✅ Uses local `data.json` (no database)

---

## 🛠 Tech Stack

- Node.js
- Express.js
- jsonwebtoken (JWT)
- dotenv
- JSON data file

---

## 📂 Project Structure

.
├── data.json
├── index.js
├── .env
├── package.json
└── README.md


---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

SECRET_KEY=your_secret_key_here


---

## ▶️ How to Run

Install dependencies: npm install


Run the server: node index.js


Server will start at: http://localhost:3000


---

## 🧪 API Endpoints

### 1️⃣ Health Check

**GET /**

Response: Api is working


---

### 2️⃣ Get Chapters (Filtered / Paginated)

**GET /api/v1/chapters**

#### 🔎 Supported Query Parameters

| Parameter  | Description |
|-----------|-------------|
| class     | Class number |
| subject   | Subject name |
| chapter   | Chapter name |
| startDate| Start date |
| endDate  | End date |
| limit    | Number of records |
| page     | Page number (10 items per page) |

---

#### ✅ Example: Full Filter

/api/v1/chapters?class=10&subject=Math&chapter=Algebra&startDate=2024-01-01&endDate=2024-01-31

---

#### ✅ Example: Limit

/api/v1/chapters?limit=5

---

#### ✅ Example: Pagination


/api/v1/chapters?page=2

---

### 3️⃣ Upload Chapters (Protected Route)

**POST /api/v1/chapters**

🔐 Requires **Bearer Token**

#### Headers:

Authorization: Bearer <your_token_here>
Content-Type: application/json


#### Body Example:
```json
{
  "class": 10,
  "subject": "Math",
  "chapter": "Algebra",
  "startDate": "2024-01-01",
  "endDate": "2024-01-31"
}



 ❌ Unauthorized Response
You are unauthorized, ERROR 404


⚠️ Important Notes

No database is used

Token is hardcoded for demo purposes

Filtering uses exact matching

Pagination logic uses page * 10

🎯 Learning Outcomes

Understanding JWT authentication

Handling query parameters in Express

Implementing pagination logic

Structuring REST APIs

👤 Author

Anuj Katare
B.Tech (IT) Student
Backend & MERN Stack Developer 🚀