const express = require("express");
const { createUser, getUsers, deleteUser, updateUser, getUser } = require("../controller/users.js");

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:dataSearch", getUser);
router.post("/users", createUser);
router.delete("/users/:id", deleteUser);
router.put("/users", updateUser);

module.exports = router;
