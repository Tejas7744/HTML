let btn = document.getElementById("tbtn");
let btn_1 = document.querySelector(".nav");

btn.addEventListener("click", function () {
  btn_1.classList.add("navigate");
});
let cbtn = document.getElementById("cbtn");
cbtn.addEventListener("click", function () {
  btn_1.classList.remove("navigate");
});
