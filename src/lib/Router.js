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
    if (slug === "/") slug = "home";

    const isSlugMatch = (prefix) => slug.startsWith(prefix);
    const renderBlogPage = () => {
      Helpers.clearContent();
      config.body.className = "blog";
      CategoryWidget.render();
      TagWidget.render();
    };

    switch (true) {
      case slug === "home":
        Helpers.clearPage();
        Page.render("home");
        break;
      case slug === "/blog":
        renderBlogPage();
        Posts.render();
        break;
      case isSlugMatch("/post"):
        renderBlogPage();
        Post.render(slug.substring(6));
        break;
      case isSlugMatch("/category"):
        renderBlogPage();
        Category.render(slug.substring(10));
        break;
      default:
        Helpers.clearPage();
        Page.render(slug);
    }
  }
}
