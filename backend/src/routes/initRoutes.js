const express = require("express");
const authRoute = require("./authRoute");
const postRoute = require("./postRoute");
const commentRoute = require("./commentRoute");

let initRoutes = (app) => {
  app.use("/api/auth", authRoute);
  app.use("/api/post", postRoute);
  app.use("/api/comment", commentRoute);

  return app;
};

module.exports = initRoutes;
