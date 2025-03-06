import Helpers from "./Helpers";
import Page from "../components/Page";
import Posts from "../components/Posts";
import Post from "../components/Post";

export default class Router {
  /*
   * Init the routers
   */
  static init() {
    Helpers.clearPage();
    Router.loadPage();
    Router.listenPageChange();
  }

  /*
   * Get slug from the URL
   */
  static getSlug() {
    let slug = window.location.hash;

    if ("" === slug) {
      return null;
    } else {
      return slug.slice(1);
    }
  }

  /*
   * Function for URL change
   */
  static listenPageChange() {
    window.addEventListener("hashchange", Router.loadPage, false);
  }

  /*
   * Page based on url
   */
  static loadPage() {
    let slug = Router.getSlug() || "home";

    if ("/" == slug) slug = "home";

    if ("/blog" == slug) {
      Helpers.clearContent();
      Posts.render();
    } else if ("/post" == slug.substring(0, 5)) {
      Helpers.clearContent();
      Post.render(slug.substring(6));
    } else {
      Helpers.clearPage();
      Page.render(slug);
    }
  }
}
