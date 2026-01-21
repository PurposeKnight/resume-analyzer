const express = require("express");
const cors = require("cors");

const analyzeRoutes = require("./routes/analyze");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/analyze", analyzeRoutes);

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
