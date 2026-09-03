This tests your core database operations, routing, and data structures.

# List / Read All (GET /api/v1/products)

1. Support Pagination (page=1&limit=10) so you don't crash memory returning 10,000 items.
2. Basic Filtering & Searching (e.g., filter by category or search by name).
3. Field selection (returning only required fields instead of heavy DB documents).

# Read Single (GET /api/v1/products/:id)

1. Handle invalid Mongo Object IDs / database IDs cleanly without crashing the app.
2. Return a proper 404 Not Found if the record doesn't exist.

# Create Item (POST /api/v1/products)

1. Input sanitization and validation before database insertion.
2. Auto-assign timestamps (createdAt, updatedAt).
3. Return 201 Created with the newly created resource object.

# Update Item (PATCH /api/v1/products/:id)

1. Use PATCH for partial updates (updating 1-2 fields) rather than overwriting the whole object with PUT.

# Delete Item (DELETE /api/v1/products/:id)

1. Hard delete (remove from DB) or Soft delete (setting isDeleted: true).
2. Return 200 OK or 204 No Content.