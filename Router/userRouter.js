const express = require("express");
const {getUser, addUser, updateUser, deleteUser} = require("../controller/userController");

const router = express.Router();

router.get("/get", getUser);

router.post("/add", addUser);

router.put("/update/:id", updateUser);

router.delete("/delete/:id", deleteUser);

module.exports = router;