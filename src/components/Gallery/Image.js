import Helpers from "../../lib/Helpers";

export default class Image {
  /*
   * render GalleryImage to page
   */
  static render(image) {
    const galleryContainer = document.querySelector("ul.gallery");
    if (!galleryContainer) return;

    const li = document.createElement("li"),
      img = document.createElement("img"),
      captionEl = document.createElement("div"),
      dateEl = document.createElement("span");

    img.src = image.source_url;
    img.alt = image.alt_text;
    img.classList.add("gallery-item");

    const captionText = image.caption.rendered.replace(/<\/?[^>]+(>|$)/g, "");

    captionEl.textContent = captionText;
    captionEl.classList.add("caption");

    dateEl.textContent = Helpers.formatDate(image.date);
    dateEl.classList.add("date");

    li.append(img, captionEl);
    captionEl.appendChild(dateEl);
    galleryContainer.appendChild(li);
  }
}
