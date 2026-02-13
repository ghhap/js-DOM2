import { renderGallery } from './gallery.js';
import { fetchImages } from './api.js';

export function initializeEvents(
  gallery,
  loadMoreBtn,
  clearBtn,
  removeLastBtn,
  reverseBtn
) {
  let page = 1;
  const limit = 4;
  let imagesArray = [];

  async function loadImages() {
    const data = await fetchImages(page, limit);
    imagesArray.push(...data);
    renderGallery(gallery, imagesArray);
    page++;
  }

  clearBtn.addEventListener("click", () => {
    imagesArray = [];
    gallery.innerHTML = "";
  });

  loadMoreBtn.addEventListener("click", () => {
    loadImages();
  });

  removeLastBtn.addEventListener("click", () => {
    imagesArray.pop();
    renderGallery(gallery, imagesArray);
  });

  reverseBtn.addEventListener("click", () => {
    imagesArray.reverse();
    renderGallery(gallery, imagesArray);
  });

  loadImages();
}
