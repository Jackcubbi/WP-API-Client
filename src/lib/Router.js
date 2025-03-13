import config from "./config";
import Helpers from "./Helpers";
import Page from "../components/Page";
import Posts from "../components/Posts";
import Post from "../components/Post";
import CategoryWidget from "../components/Widgets/Category/index";
import TagWidget from "../components/Widgets/Tag/index";
import Category from "../components/Categories/index";
import Tag from "../components/Tags/index";
import Gallery from "../components/Gallery/index";

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

    if (slug === "home") {
      Helpers.clearPage();
      Page.render("home");
    } else if (slug === "/blog") {
      renderBlogPage();
      Posts.render();
    } else if (isSlugMatch("/post")) {
      renderBlogPage();
      Post.render(slug.substring(6));
    } else if (isSlugMatch("/category")) {
      renderBlogPage();
      Category.render(slug.substring(10));
    } else if (isSlugMatch("/tag")) {
      renderBlogPage();
      Tag.render(slug.substring(5));
    } else if (isSlugMatch("/media")) {
      Helpers.clearContent();
      config.body.className = "media";
      Page.render(slug);
      Gallery.render();
    } else {
      Helpers.clearPage();
      Page.render(slug);
    }
  }
}
