const express = require("express");

const postRouter = express.Router();

postRouter.get("/", (req, res) => {
  res.json({
    message: "All posts fetched",
  });
});

postRouter.get("/:id", (req, res) => {
  res.json({
    message: `Getting post with id ${req.params.id}`,
  });
});

postRouter.put("/:id", (req, res) => {
  res.json({
    message: `Updating post with id ${req.params.id}`,
  });
});

postRouter.delete("/:id", (req, res) => {
  res.json({
    message: `Deleting post with id ${req.params.id}`,
  });
});
