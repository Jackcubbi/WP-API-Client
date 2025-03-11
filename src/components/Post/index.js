import config from "../../lib/config";
import Helpers from "../../lib/Helpers";
import Comments from "../Comments/index";

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
        Comments.render(post[0].id);
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }
}
