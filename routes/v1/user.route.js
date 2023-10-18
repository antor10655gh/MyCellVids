const express = require("express");
const app = express.Router();

const userControllers = require("../../controllers/user.controller");
const { auth } = require("../../middleware/auth");

app.get("/", auth, userControllers.allUsers);
app.get("/:id", auth, userControllers.singleUser);
app.post("/register", userControllers.register);
app.post("/login", userControllers.login);
app.post("/addUser", auth, userControllers.addUser);
app.put(
  "/update/:id",
  auth,
  upload.single("userProfilePic"),
  userControllers.updateUser
);
app.delete("/:id", auth, userControllers.deleteUser);

module.exports = app;
