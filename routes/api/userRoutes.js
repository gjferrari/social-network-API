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
router.route("/").get(getThoughts).post(createThought);

// /api/user/:userID
router
  .route("/:thoughtId")
  .get(getAllUsers)
  .get(getSingleUser)
  .put(createUser)
  .put(addFriend)
  .put(updateUser)
  .delete(deleteUser)
  .delete(removeFriend);

module.exports = router;
