const { Schema, model } = require("mongoose");

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },

  username: {
    type: String.apply,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.Now,
    //Use a getter method to format the timestamp on query
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
    default: Date.Now,
    //Use a getter method to format the timestamp on query
    //https://www.mongodb.com/docs/manual/reference/method/Date/ I do not understand this
  },

  username: {
    type: String,
    required: true,
  },

  reactions: [reactionSchema],
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
