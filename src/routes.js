const routes = require("next-routes");

// Setup router.
module.exports = routes()
  .add("index", "/")
  .add("single", "/blog/:slug")
  .add("success-story-detail", "/success-story/:slug")
  .add("posts");
