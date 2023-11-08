require("./db/connection");
const express = require("express");
const cors = require("cors");
const userRouter = require("./user/user.routes");
// const initModels = require("./models/init-models");
const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());
// initModels();
app.use(userRouter);

app.listen(port, () => {
  console.log(`Success port ${port}`);
});