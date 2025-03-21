import config from "../../lib/config";
import Helpers from "../../lib/Helpers";

export default class Page {
  /**
   * Render pages on the page
   */
  static render(slug) {
    config.wp
      .pages()
      .slug(slug)
      .embed()
      .perPage(1)
      .then((pages) => {
        if (pages[0]) {
          Helpers.renderContent(pages[0]);
        } else {
          Helpers.renderContent(config.page404);
        }
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }
}
