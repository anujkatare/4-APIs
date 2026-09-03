This tests multipart handling, third-party integrations, and streaming.

# Multipart Data Handling (Multer)

1. Configure Multer middleware to handle multipart/form-data streams in memory or temporary storage.

# File Validation

1. MIME-type filtering: Accept only specific extensions (e.g., .jpg, .png, .pdf) and reject executable binaries.
2. File size limits: Enforce max payload sizes (e.g., limit image uploads to 2MB - 5MB) to prevent denial-of-service (DoS).

# Cloud Storage Integration (Cloudinary or AWS S3)

1. Stream or upload files directly to cloud storage rather than storing them permanently on the local node server filesystem.
2. Obtain and store the external secure asset URL (secure_url) and unique public ID in the database.

# Cleanup & Deletion Route

1. Automatically delete old/overwritten files from cloud storage when a user updates or deletes their image.