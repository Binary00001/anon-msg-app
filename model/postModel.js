import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const PostSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },

  text: {
    type: String,
    required: true,
  },
});
