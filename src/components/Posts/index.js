import config from "../../lib/config";
import Helpers from "../../lib/Helpers";
import Comments from "../Comments/index";

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
        let renderedPosts = posts.map((content) => {
          Helpers.renderContent(content, "h2", true);
          Comments.render(post[0].id);
        });
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }
}
