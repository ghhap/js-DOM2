export function renderGallery(galleryElement, imagesArray) {
  galleryElement.innerHTML = "";

  imagesArray.forEach(image => {
    const img = document.createElement("img");
    img.src = image.download_url;
    img.alt = "Random image";
    galleryElement.appendChild(img);
  });
}
