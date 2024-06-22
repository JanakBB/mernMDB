const express = require("express");
const userRouter = require("./Router/userRouter");
const postRouter = require("./Router/postRouter");
const logger = require("./middleWare/logger");
const errorHandlor = require("./middleWare/errorMiddleWare");

const app = express();

app.use(express.json());

app.use("/api/user", logger, userRouter);
app.use("/api/post", postRouter);
app.use(express.static("public"));

app.use(errorHandlor);

app.listen(3300, () => {
    console.log("Server 3300 is running......");
})