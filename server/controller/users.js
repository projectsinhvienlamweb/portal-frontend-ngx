const mongoose = require("mongoose");
const user = require("../models/user.js");
const USER = require("../models/user.js");

function getUsers(req, res, next) {
  USER.find()
    .select("name dob role avatar phone_number email")
    .then((allUser) => {
      return res.status(200).json(allUser);
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Internal Server",
        error: err.message,
      });
    });
}
function getUser(req, res, next) {
  let props = "id name dob role phone_number email".split(" ");
  let store = [];
  USER.find()
    .select("id name dob role phone_number avatar email")
    .then((users) => {
      for (let user of users) {
        for (let prop of props) {
          if (
            user[prop].toString().toLowerCase().includes(req.params.dataSearch)
          ) {
            store.push(user);
            break;
          }
        }
      }
      res.json(store);
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Internal Server",
        error: err.message,
      });
      res.status(404).json({
        success: false,
        message: "File Not Found",
        error: err.message,
      });
    });
}
function deleteUser(req, res, next) {
  const id = req.params._id;
  console.log(id);
  USER.findOneAndDelete(id)
    .exec()
    .then((userDeleted) => {
      res.status(204).json({ success: true });
      next();
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
      });
    });
}

async function updateUser(req, res, next) {
  const dateUpdate = {
    name: req.body.name
      ? String(req.body.name).replace(/\w\S*/g, (name)=>name.replace(/^\w/, name=>name.toLocaleUpperCase()))
      : "GUEST_".toLocaleUpperCase() + Math.floor(Math.random() * 500),
    email: req.body.email,
    dob: req.body.dob,
    avatar: req.body.avatar
      ? req.body.avatar
      : "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    role: req.body.role
      ? String(req.body.role).toLocaleUpperCase()
      : "STUDENT".toLocaleUpperCase(),
    phone_number: req.body.phone_number,
  };

  const userUpdated = await USER.findOne({ _id: req.body._id });

  userUpdated.overwrite(dateUpdate);

  // Set new Data for user
  return await userUpdated
    .save()
    .then((userUpdated) => res.status(200).json(userUpdated));
}

async function createUser(req, res, next) {
  const user = new USER({
    _id: Math.floor(Math.random() * 1000000) + "_TE",
    name: req.body.name
      ? req.body.name
      : "GUEST_".toLocaleUpperCase() + Math.floor(Math.random() * 500),
    email: req.body.email,
    dob: req.body.dob,
    avatar: req.body.avatar
      ? req.body.avatar
      : "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    role: req.body.role
      ? String(req.body.role).toLocaleUpperCase()
      : "student".toLocaleUpperCase(),
    phone_number: req.body.phone_number,
  });

  return await user
    .save()
    .then((newUser) => {
      return res.status(200).json(newUser);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  createUser,
  updateUser,
  getUsers,
  getUser,
  deleteUser,
};
