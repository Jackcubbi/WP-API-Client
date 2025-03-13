import config from "../../lib/config";
import Helpers from "../../lib/Helpers";

export default class Posts {
  /**
   * Render posts on the blog page
   */
  static render() {
    config.wp
      .posts()
      .embed()
      //.perPage(3)
      .then((posts) => {
        Helpers.renderHeader("Blog", "h1");
        posts.forEach((content) => {
          Helpers.renderContent(content, "h2", true);
        });
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }
}
