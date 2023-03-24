const { Schema, model } = require("mongoose");
// const reactionSchema = require("./Reaction");

const reactionSchema = new Schema({
  // reactionId: {
  //   type: Schema.Types.ObjectId,
  //   default: () => new Types.ObjectId(),
  // },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },

  username: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    // get: (date) => moment(date).format("MMM DD, YYYY [at] hh:mm a"),
  },
});
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLenght: 280,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    // get: (date) => moment(date).format("MMM DD, YYYY [at] hh:mm a"),
    //Use a getter method to format the timestamp on query
    //https://www.mongodb.com/docs/manual/reference/method/Date/ I do not understand this
  },

  username: {
    type: String,
    required: true,
  },
  //   userSchema.virtual("reactionCount").get(() => {
  //     return this.reactions.length;
  // });

  reactions: [reactionSchema],
});

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
