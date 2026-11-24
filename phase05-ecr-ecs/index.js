const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const students = [
  { id: 1, name: "Aarav Sharma", course: "Cloud Computing" },
  { id: 2, name: "Priya Verma", course: "DevOps Engineering" },
  { id: 3, name: "Rahul Singh", course: "Computer Science" }
];

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    service: "StudentHub API"
  });
});

app.get("/api/students", (req, res) => {
  res.status(200).json({
    count: students.length,
    students
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`StudentHub API running on port ${PORT}`);
});
