const modal = document.querySelector(".modal");
const xBtn = document.querySelector(".modal__header i");
const closeBtn = document.querySelector(".modal__close");
const openBtn = document.querySelector(".open-modal-btn");
const innerBtn = document.querySelector(".inner-modal");
innerBtn.onclick = (e) => {
  e.stopPropagation();
};
const toogleModal = (e) => {
  e.stopPropagation();
  modal.classList.toggle("hide");
};

openBtn.addEventListener("click", () => {
  modal.classList.remove("hide");
});

modal.addEventListener("click", toogleModal);
xBtn.addEventListener("click", toogleModal);
closeBtn.addEventListener("click", toogleModal);
