import config from "../../lib/config";
import Helpers from "../../lib/Helpers";

export default class Category {
  /*
   * render a posts from tag ID
   */
  static render(catID = "") {
    config.wp
      .posts()
      .embed()
      .categories(catID)
      .then((posts) => {
        posts.forEach((post) => {
          Helpers.renderContent(post, "h2", true);
        });
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }
}
