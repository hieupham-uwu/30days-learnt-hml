const gallery = document.querySelector(".gallery");
const galleryImg = document.querySelector(".gallery__image img");
const images = document.querySelectorAll(".image img");
const preBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const closeBtn = document.querySelector(".gallery__close");
let currentIndex = 0;
images.forEach((image, index) => {
  image.onclick = (e) => {
    currentIndex = index;
    galleryImg.src = e.target.src;
    console.log(images.length);
    console.log(currentIndex);
    if (currentIndex == 0) {
      preBtn.classList.add("hide");
      nextBtn.classList.remove("hide");
    } else if (currentIndex >= images.length - 1) {
      console.log("ye");
      nextBtn.classList.add("hide");
      preBtn.classList.remove("hide");
    } else {
      preBtn.classList.remove("hide");
      nextBtn.classList.remove("hide");
    }

    gallery.classList.add("open");
  };
});

const showGalleryImg = (currentIndex) => {
  console.log(currentIndex);
  galleryImg.src = images[currentIndex].src;
};
closeBtn.onclick = () => {
  gallery.classList.remove("open");
};

preBtn.onclick = () => {
  if (currentIndex > 0) {
    currentIndex--;
    showGalleryImg(currentIndex);
    nextBtn.classList.remove("hide");
  } else {
    preBtn.classList.add("hide");
  }
};

nextBtn.onclick = () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showGalleryImg(currentIndex);
    preBtn.classList.remove("hide");
  } else {
    nextBtn.classList.add("hide");
  }
};
