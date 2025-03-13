import config from "../../lib/config";
import Helpers from "../../lib/Helpers";

export default class userPosts {
  /**
   * Gets Posts based user ID
   */
  static render(userSlug) {
    config.wp
      .users()
      .slug(userSlug)
      .then((users) => {
        let renderedUser = users.map((user) => {
          config.wp
            .posts()
            .author(user.id)
            .embed()
            .then((posts) => {
              let renderedPosts = posts.map((postObj) => {
                Helpers.renderContent(postObj, "h2", true);
              });
            });
        });
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }
}
