const gallery = document.getElementById("gallery");
const loadMoreBtn = document.getElementById("loadMore");
const clearBtn = document.getElementById("clear");
const removeLastBtn = document.getElementById("removeLast");
const reverseBtn = document.getElementById("reverse");

let page = 1;
const limit = 4; 
let imagesArray = []; 


async function loadImages() {
  try {
    const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
    const data = await response.json();

    imagesArray.push(...data); 

    renderGallery(); 
    page++; 

  } catch (error) {
    console.error("Помилка завантаження:", error);
  }
}

function renderGallery() {
  gallery.innerHTML = ""; 

  imagesArray.forEach(image => {
    const img = document.createElement("img");
    img.src = image.download_url;
    img.alt = "Random image";
    gallery.appendChild(img);
  });
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
  renderGallery();
});

reverseBtn.addEventListener("click", () => {
  imagesArray.reverse();
  renderGallery();
});

loadImages();
