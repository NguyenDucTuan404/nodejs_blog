const newsRouter = require("./news");
const coursesRouter = require("./courses");
const meRouter = require("./me");

// Home
const siteRouter = require("./site");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/courses", coursesRouter);
  app.use("/me", meRouter);

  //Home
  app.use("/", siteRouter);
}

module.exports = route;
