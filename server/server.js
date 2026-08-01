require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

// Test Database Connection
db.getConnection((err, connection) => {
    if (err) {
        console.error("❌ Database Connection Failed:", err.message);
        return;
    }

    console.log("✅ Connected to MySQL Database");

    connection.release();
});

// Test Route
app.get("/", (req, res) => {
    res.send("🚀 Welcome to NexaMart API");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});