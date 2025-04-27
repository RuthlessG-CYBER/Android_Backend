const express = require("express");
const connectDB = require("./config/db"); // <-- import connectDB
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Start server
const PORT = 4040;

connectDB(); // <-- call it here

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
