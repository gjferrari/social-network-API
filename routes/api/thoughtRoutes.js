const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController.js");

// /api/thought/
router.route("/").get(getThoughts).post(createThought);

// /api/thought/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thougthId/reactions/:reactionId").delete(deleteReaction);

//localhost:3001/api/thought/641b9fbf13090fe45ca5407e/reactions/641bc9336a673a2c9ca15c9b
http: router.route;
module.exports = router;
