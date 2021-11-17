const routes = require("next-routes");

// Setup router.
module.exports = routes()
  .add("index", "/")
  .add("single", "/blog/:slug")
  .add("solutions/[slug]", "/solutions/:slug")
  .add("success-story-detail", "/success-story/:slug")
  .add("solutions-detail", "/solutions/:slug")
  .add("posts");
