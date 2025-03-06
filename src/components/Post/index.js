import config from "../../lib/config";
import Helpers from "../../lib/Helpers";

export default class Post {
  /**
   * Render post on the post page
   */
  static render(slug) {
    config.wp
      .posts()
      .slug(slug)
      .embed()
      .then((post) => {
        Helpers.renderContent(post[0], "h1", false);
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }
}
