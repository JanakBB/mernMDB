const express = require("express");
const userRouter = require("./Router/userRouter");
const postRouter = require("./Router/postRouter");

const app = express();

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/post", postRouter);

app.listen(3300, () => {
    console.log("Server 3300 is running......");
})