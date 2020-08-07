import {
  getPosts,
  addPost,
  getPostById,
  deletePost,
} from "../controllers/controllers.js";

const routes = (app) => {
  app
    .route("/posts")
    //get all posts
    .get(getPosts)
    //add post
    .post(addPost);

  app
    .route("/posts/:PostId")
    //get post by ID
    .get(getPostById)
    //delete post (admin only...? TODO)
    .delete(deletePost);

  // app.route("/posts/:PostId/add-comment"); TODO
  //TODO
  //.post(addComment); TODO
};

export default routes;
