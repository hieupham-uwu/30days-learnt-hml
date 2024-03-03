const eKey = document.querySelector(".key");
const eLocation = document.querySelector(".location");
const eWhich = document.querySelector(".which");
const eCode = document.querySelector(".code");
const box = document.querySelector(".box");
const eResult = document.querySelector(".box__result");
const eAlert = document.querySelector(".alert");

document.addEventListener("keydown", (e) => {
  eAlert.classList.add("hide");
  box.classList.remove("hide");
  eKey.textContent = e.key;
  eLocation.textContent = e.location;
  eWhich.textContent = e.which;
  eCode.textContent = e.code;
  eResult.textContent = e.keyCode;
});
