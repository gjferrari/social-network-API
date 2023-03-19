const router = require("express").Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController.js");

// /api/user
router.route("/").get(getAllUsers).post(getSingleUser);

// /api/user/:userID
router.get(getSingleUser).delete(deleteUser).delete(removeFriend);

// /api/user/:userID/friends/:friendID
module.exports = router;
