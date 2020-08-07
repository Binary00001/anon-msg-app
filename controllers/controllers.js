import mongoose from "mongoose";
import { PostSchema } from "../model/postModel";

const Post = mongoose.model("Post", PostSchema);

export const getPosts = (req, res) => {
  Post.find({}, (err, Post) => {
    if (err) {
      res.send(err);
    }
    res.json(Post);
  });
};

export const addPost = (req, res) => {
  let newPost = new Post(req.body);

  newPost.save((err, Post) => {
    if (err) {
      res.send(err);
    }
    res.json(Post);
  });
};

export const getPostById = (req, res) => {
  Post.findById(req.params.PostId, (err, Post) => {
    if (err) {
      res.send(err);
    }
    res.json(Post);
  });
};

export const deletePost = (req, res) => {
  Post.findOneAndDelete(req.params.PostId, (err, Post) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Post successfully removed" });
  });
};

// export default addComment = (req, res) => {
// TODO
// }
