import config from "../../lib/config";
import Helpers from "../../lib/Helpers";

export default class Tag {
  /*
   * render a tags from tag ID
   */
  static render(slug = "") {
    config.wp
      .posts()
      .embed()
      .tags(slug)
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
