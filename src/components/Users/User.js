import config from "../../lib/config";
import Helpers from "../../lib/Helpers";

export default class User {
  /*
   * render Users on the User
   */
  static render(slug = "", titileTag = "h1", addLink = false) {
    config.wp
      .users()
      .slug(slug)
      .then((users) => {
        let renderedUsers = users.map((user) => {
          let userPost = {
            id: user.id,
            slug: user.slug,
            type: "user",
            title: {
              rendered: user.name,
            },
            content: {
              rendered: user.description,
            },
            _embedded: {
              author: [
                {
                  name: user.name,
                },
              ],
              "wp:featuremedia": [
                {
                  source_url: user.avatar_urls["96"],
                },
              ],
            },
            link: config.apiRoot + "/wp/v2/Users/?slug" + user.slug,
          };
          Helpers.renderContent(userPost, titileTag, addLink);
        });
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }
}
