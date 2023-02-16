const { Schema, model } = require("mongoose");

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
  },

  username: {
    type: String,
    required: true,
  },

  reactions: [{ type: Schema.Types.ObjectId, ref: "reactions" }],
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
