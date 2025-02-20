import config from "./config";

export default class Helpers {
  /*
   *getTitleMarkup for a content title
   */
  static getTitleMarkup(content, titleTag = "h1", addLink = false) {
    const titleEl = document.createElement(titleTag),
      linkEl = document.createElement("a"),
      title = document.createElement(content.title.rendered);

    titleEl.classList.add("entry-title");

    if (addLink == true) {
      linkEl.appendChild(title);
      linkEl.href = Helpers.makeHashFromLink(content);
      titleEl.appendChild(linkEl);
    } else {
      title.appendChild(title);
    }

    titleEl.appendChild(linkEl);
    return titleEl;
  }

  /*
   *getContentMarkup for a content
   */
  static getContentMarkup(content) {
    let contentEl = document.createElement("div"),
      contentMarkup = "",
      date = Helpers.formatDate(content.date),
      lastModified = Helpers.formatDate(content.modified),
      author = content._embedded.author[0].name,
      featuredImg = "";

    if (content._embedded["wp:featuremedia"]) {
      featuredImg = content._embedded["wp:featuremedia"][0].source_url;
    }

    contentEl.classList.add("entry-content");
    if ("post" == content.type) {
      contentMarkup += `<p class="meta">Author: ${author} | ${date} </p>`;
    }
    if (featuredImg) {
      contentMarkup += `<img class="feature" src=" ${featuredImg}">`;
    }

    contentMarkup += content.content.rendered;
    if ("page" == content.type) {
      contentMarkup += `<p class="footer">Last Updated: ${lastModified} by ${author} </p>`;
    }

    contentEl.innerHTML = contentMarkup;

    return contentEl;
  }

  /*
   *renderSiteInfo
   */
  static renderSiteInfo(title, description) {
    config.siteTitle.innerHTML = title;
    config.siteDescription.innerHTML = description;
  }

  static renderSiteInfo(title, description) {
    if (config.siteTitle) {
      config.siteTitle.innerHTML = title;
    } else {
      console.error("Element for siteTitle not found");
    }

    if (config.siteDescription) {
      config.siteDescription.innerHTML = description;
    } else {
      console.error("Element for siteDescription not found");
    }
  }

  /*
   *renderHeader - Renders title to Page
   */
  static renderHeader(title, tag = "h1") {
    let titleEl = document.createElement(tag);
    titleEl.innerHTML = title;
  }

  /*
   *getHash - Get the hash from the url
   */
  static makeHashFromLink(content, linkType) {
    let linkArray = content.link.split("/"),
      type = content.type || linkType;

    switch (type) {
      case "post":
        return "#/post/" + linkArray[3];
        break;
      case "category":
        return "#/category/" + content.slug;
        break;
      case "tag":
        return "#/tag/" + linkArray[4];
        break;
      case "user":
        return "#/user/" + content.slug;
        break;
      default:
        return "#/" + linkArray[3];
    }
  }

  /*
   *formatDate - Convert ISO date to desired format
   */
  static formatDate(date) {
    let newDate = new Date(date),
      day = newDate.getDay(),
      month = newDate.getDate(),
      year = newDate.getFullYear(),
      hours = newDate.getHours(),
      min = newDate.getMinutes();

    return day + "/" + month + "/" + year + "/" + hours + ":" + min;
  }

  /*
   *ClearContent - Clear main content from Page
   */
  static clearContent() {
    config.body.className = "";
    config.articleContainer.innerHtml = "";
  }
}
