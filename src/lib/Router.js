import Helpers from "./Helpers";

export default class Router {
  /*
   * Init the routers
   */
  static init() {
    Helpers.clearContent();
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
    if ("/" == slug) slug = "/home";
    console.log(slug);
  }
}
