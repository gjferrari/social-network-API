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
router.route("/").get(getAllUsers).post(createUser);

// /api/user/:userID
router
  .route("/user/:userID")
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// /api/user/:userId/friends/:friendId

router
  .route("/user/:userID/friends/:friendId")
  .post(addFriend)
  .delete(removeFriend);
module.exports = router;
