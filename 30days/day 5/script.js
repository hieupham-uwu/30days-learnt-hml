const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-btn");
const inputBox = document.querySelector(".input-box");
searchBtn.addEventListener("click", (e) => {
  searchBox.classList.toggle("active");
  inputBox.classList.toggle("active");
});
