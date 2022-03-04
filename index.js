const express = require("express");
const userRouters = require("./routes/index");
// const goalRouters = require("./goal/goal.router");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/users", userRouters);
// app.use("/goal", goalRouters);

app.listen(PORT, () => {
  console.log(`YOUR SERVER IS WORKING AT PORT ${PORT}`);
});