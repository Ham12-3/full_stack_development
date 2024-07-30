const express = require("express");

const postRouter = express.Router();

postRouter.route("/").get((req, res) => {
  res.json({
    message: "All posts fetched",
  });
}); 

postRouter.route("/:id").get((req, res) => {
  res.json({
    message: `Getting post with id ${req.params.id}`,
  });
}).put((req, res) => {
  res.json({
    message: `Updating post with id ${req.params.id}`,
  });
}).delete((req, res) => {
  res.json({
    message: `Deleting post with id ${req.params.id}`,
  });
});





module.exports = postRouter