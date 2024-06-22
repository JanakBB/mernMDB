const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./Router/userRouter");
const postRouter = require("./Router/postRouter");
const logger = require("./middleWare/logger");
const errorHandlor = require("./middleWare/errorMiddleWare");

const app = express();

//connect mongodb
(async () => {
    try{
        let connection = await mongoose.connect("mongodb://localhost:27017/Batch3");
        console.log(`connecting mongoDB at ${connection.connection.host}`);
        
        app.listen(3300, () => {
            console.log("Server 3300 is running......");
        })
    } catch(err) {
        console.log("Error connect at", err.message);
        process.exit(1);
    }
})();

app.use(express.json());

app.use("/api/user", logger, userRouter);
app.use("/api/post", postRouter);
app.use(express.static("public"));

app.use(errorHandlor);

