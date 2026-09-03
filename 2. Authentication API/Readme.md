This tests cryptography, session security, and state management.

# User Registration (POST /api/v1/auth/signup)

1. Check if user/email already exists (409 Conflict).
2. Password Hashing: Hash passwords using bcrypt or argon2 with salt before saving to the DB. Never store plain-text passwords.
3. Sanitize output to strip the password field from the JSON response.

# User Login (POST /api/v1/auth/login)

1. Compare input password with the stored hash.
2. Return uniform generic error messages ("Invalid credentials") for both wrong email and wrong password to prevent user enumeration attacks.

# JWT Token Issuance

1. Generate a Short-lived Access Token (e.g., 15 mins expiry) and a Long-lived Refresh Token (e.g., 7 days expiry).
2. Send the Refresh Token via httpOnly, secure, sameSite Cookies to shield against XSS attacks.

# Refresh Token & Logout (POST /api/v1/auth/refresh, POST /api/v1/auth/logout)

1. Refresh route to generate a new Access Token without re-authenticating.
2. Logout route to clear HTTP-only cookies and invalidate token sessions.