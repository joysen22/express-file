const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { viewCounter } = require("./middlewares/viewCount.js");
// const limiter = require("./middlewares/rateLimite.js");
const PORT = process.env.PORT || 7000;
// app use section
app.use(express.json());
app.use(cors());
// app use for middleware

// app.use(viewCounter);

// app use for api router
app.use(
  "/api/v1/todos",
  viewCounter,

  require("./routes/v1/todos.router.js")
);
app.get("/", (req, res) => {
  res.send("server running....go to home");
});
// 404 routes handle
app.all("/*", (req, res) => {
  res.status(401).json("error invalide trandeci");
});
// app server listen
app.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
});
