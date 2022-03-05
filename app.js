const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const port = process.env.PORT || 5000;
const path = require("path");
const mongoose = require("mongoose");
//mongodb://localhost:27017/profileApp
dotenv.config();
mongoose.connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connected"))
  .catch((err) => {
    console.log(err);
  });
app.use(express.static(path.join(__dirname, "/public")));
app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./routes/userRouter"));
app.use("/api/profile", require("./routes/profileRoute"));


__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("hello");
  });
}

app.listen(port, () => {
  console.log("server is running");
});
