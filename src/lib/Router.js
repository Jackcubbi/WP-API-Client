import config from "./config";
import Helpers from "./Helpers";
import Page from "../components/Page";
import Posts from "../components/Posts";
import Post from "../components/Post";
import CategoryWidget from "../components/Widgets/Category/index";
import TagWidget from "../components/Widgets/Tag/index";
import Category from "../components/Categories/index";

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
      config.body.className = "";
      config.body.classList.add("blog");
      Posts.render();
      CategoryWidget.render();
      TagWidget.render();
    } else if ("/post" == slug.substring(0, 5)) {
      Helpers.clearContent();
      config.body.className = "";
      config.body.classList.add("blog");
      Post.render(slug.substring(6));
      CategoryWidget.render();
      TagWidget.render();
    } else if ("/category" == slug.substring(0, 9)) {
      let catSlug = slug.substring(10);
      Helpers.clearContent();
      config.body.classList.add("blog");
      Category.render(catSlug);
      CategoryWidget.render();
      TagWidget.render();
    } else {
      Helpers.clearPage();
      Page.render(slug);
    }
  }
}
