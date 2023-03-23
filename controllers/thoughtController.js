const { User, Thought } = require("../models");

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    console.log("thoughts - here they come!");
    Thought.find()
      .then((thoughtData) => res.json(thoughtData))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single thought
  getSingleThought(req, res) {
    console.log("Here comes a thought!");
    Thought.findById({ _id: req.params.thoughtId })
      .select("-__v")
      .then((thoughtData) =>
        !thoughtData
          ? res.status(404).json({ message: "No thouht with that ID" })
          : res.json(thoughtData)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a thought
  createThought(req, res) {
    console.log("Somebody's thinking!");
    Thought.create(req.body)
      .then((thoughtData) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: thoughtData._id } },
          { new: true }
        );
      })
      .then((userData) => {
        if (!userData) {
          return res.status(404).json({ message: "No user with that ID" });
        }
        res.json({ message: "Thought created" });
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  deleteThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { thoughts: req.params.thoughtId } },
      { new: true }
    )
      .then((userData) =>
        !userData
          ? res.status(404).json({ message: "No user with this id!" })
          : res.json(userData)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Delete a thought
  // deleteThought(req, res) {
  //   Thought.findOneAndDelete({ _id: req.params.thoughtId })
  //     .then((thoughtData) =>
  //       !thoughtData
  //         ? res.status(404).json({ message: "No thought with that ID" })
  //         : Thought.deleteMany({ _id: { $in: thoughtData.users } })
  //     )
  //     .then(() => res.json({ message: "Thought deleted!" }))
  //     .catch((err) => res.status(500).json(err));
  // },

  // Update a course
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thoughtData) =>
        !thoughtData
          ? res.status(404).json({ message: "No thought with this id!" })
          : res.json(thoughtData)
      )
      .catch((err) => res.status(500).json(err));
  },

  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thoughtData) =>
        !thoughtData
          ? res.status(404).json({ message: "No thought with this id!" })
          : res.json(thoughtData)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Remove reaction from a thought
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thoughtData) =>
        !thoughtData
          ? res.status(404).json({ message: "No thought with this id!" })
          : res.json(thoughtData)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // addReaction(req, res) {
  //   User.findOneAndUpdate(
  //     { _id: req.params.thoughtId },
  //     { $addToSet: { friends: req.params.reactionId } },
  //     { new: true }
  //   )
  //     .then((userData) =>
  //       !userData
  //         ? res.status(404).json({ message: "No user with this id!" })
  //         : res.json(userData)
  //     )
  //     .catch((err) => res.status(500).json(err));
  // },
  // deleteReaction(req, res) {
  //   User.findOneAndUpdate(
  //     { _id: req.params.thoughtId },
  //     { $pull: { friends: req.params.reactionId } },
  //     { new: true }
  //   )
  //     .then((userData) =>
  //       !userData
  //         ? res.status(404).json({ message: "No user with this id!" })
  //         : res.json(userData)
  //     )
  //     .catch((err) => res.status(500).json(err));
  // },
};
