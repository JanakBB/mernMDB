const express = require('express');
let {postUser, addPostUser} = require("../controller/postController");
const router = express.Router();

router.get("/postget", postUser);

router.post("/postadd", addPostUser);

module.exports = router;
