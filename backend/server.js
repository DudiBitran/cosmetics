const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", require("./routes/leadRoute"));

const frontendPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(frontendPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
