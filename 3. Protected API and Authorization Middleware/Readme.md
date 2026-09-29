This tests request interception, middleware logic, and user access control.

# Auth Middleware (isLoggedIn / authenticate)

1. Intercept incoming requests, extract the JWT from headers (Bearer <token>) or HttpOnly cookies.
2. Verify token integrity and check expiration.
3. Fetch current user details and attach them directly to the request object (req.user = user).

# Role-Based Access Control (RBAC - authorize('admin'))

1. Restrict endpoints based on user roles (e.g., standard users can view products, but only Admin can delete them).
2. Return 401 Unauthorized if no/invalid token is provided, and 403 Forbidden if role permissions are insufficient.

# Protected Resource Routes (e.g., GET /api/v1/users/profile)

1. Fetch current logged-in user details via req.user._id.
2. Update user profile settings or change passwords securely.