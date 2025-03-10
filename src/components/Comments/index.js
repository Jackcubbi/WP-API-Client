import config from "../../lib/config";
import Comment from "./Comment";

export default class Comments {
  /**
   * Render comments on the single post page
   */
  static render(id) {
    config.wp
      .comments()
      .post(id)
      .embed()
      .then((comments) => {
        let renderedComments = comments.map((comment) => {
          Comment.render(comment);
        });
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }
}
