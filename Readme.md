# Backend API Practice Projects

A hands-on collection of four standalone **Node.js + Express** projects for learning backend development by building and exploring real API patterns. The projects cover product CRUD, authentication, authorization, and file uploads.

Each numbered folder is its own application with its own dependencies and setup. The README inside each folder describes the concepts and practice requirements for that project. Treat those items as a learning checklist; use the source code to see what is currently implemented and what you can build next.

## Projects

| Project | What you can learn |
| --- | --- |
| [1. Basic CRUD API](1.%20Basic%20CRUD%20API/Readme.md) | Express routes and controllers, product CRUD, MongoDB with Mongoose, request validation, status codes, filtering, and pagination. |
| [2. Authentication API](2.%20Authentication%20API/Readme.md) | Signup and login flows, password hashing with bcrypt, JWT access and refresh tokens, cookies, token refresh, and logout. |
| [3. Protected API and Authorization Middleware](3.%20Protected%20API%20and%20Authorization%20Middleware/Readme.md) | JWT middleware, protected routes, attaching the authenticated user to a request, role-based access, and the difference between 401 and 403 responses. |
| [4. File Upload API](4.%20File%20Upload%20API/Readme.md) | Multipart requests with Multer, file validation, Cloudinary integration, and updating or deleting uploaded files. |

## A Good Learning Path

1. Start with **Basic CRUD** to understand how an Express request travels through routes, controllers, models, and the database.
2. Move to **Authentication** and follow how a user signs up, logs in, receives tokens, refreshes a session, and logs out.
3. Explore **Protected API** to see how authentication middleware protects actions and how authorization decisions are made.
4. Finish with **File Uploads** to handle multipart data and connect an API to an external cloud service.

For each project, read its folder README, trace a request through the code, run the API, and try the endpoints with Postman, Insomnia, or `curl`. Then implement or improve one checklist item at a time and verify it with both a successful request and an expected failure case.

## Requirements

- Node.js and npm
- MongoDB for projects 1, 2, and 3
- A Cloudinary account for cloud upload features in project 4
- An API client such as Postman or Insomnia (optional, but useful)

## Run a Project

Run these commands from the repository root, replacing the folder name with the project you want to explore:

```bash
cd "1. Basic CRUD API"
npm install
```

Create a `.env` file in that project folder and add the variables it needs, listed below. Then start the server:

```bash
node app.js
```

Each folder installs its own dependencies; there is no root-level `npm install`. Projects 1, 2, and 4 use port `3000`, while project 3 uses port `3001`. Stop a running server before starting another project that uses the same port.

### Environment Variables

Add only the variables needed by the project you are running. Replace the example values with your own local credentials.

**1. Basic CRUD API**

```env
MONGO_URI=your_mongodb_connection_string
```

**2. Authentication API**

```env
MONGO_URI=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=use_a_long_random_secret
REFRESH_TOKEN_SECRET=use_a_different_long_random_secret
```

**3. Protected API and Authorization Middleware**

```env
MONGO_URI_USER=your_users_database_connection_string
MONGO_URI_PRODUCT=your_products_database_connection_string
ACCESS_TOKEN_SECRET=use_a_long_random_secret
REFRESH_TOKEN_SECRET=use_a_different_long_random_secret
```

**4. File Upload API**

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Never commit real `.env` files, database credentials, or Cloudinary secrets. Keep your own credentials local and rotate them if they are ever exposed.

## Make It a Practice Assignment

- Pick one project and write down what each endpoint should accept and return.
- Test normal input, missing fields, invalid credentials or IDs, and unauthorized requests.
- Compare the actual response with the behavior described in that project's README.
- Choose a checklist item that is missing or incomplete, implement it, and test it again.
- Try extensions such as pagination, consistent error handling, input validation, file size limits, and role checks.

This is a learning project: review the code and adapt it before using these patterns in a production application.

## Contribute

Found a bug or have an idea for another backend exercise? Open an issue or submit a pull request. Small improvements to validation, error handling, documentation, and tests are great ways to practice.

If this project helps you learn, please **fork the repository, give it a star, and share it with another developer**. Your support helps more learners find and improve these exercises.

---

Made for learners building stronger backend skills, one API at a time.