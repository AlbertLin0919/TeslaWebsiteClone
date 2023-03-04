const menuBtn = document.querySelector("#menuBtn");
const rwdBtn = document.querySelector(".nav_button");
const backdrop = document.querySelector(".backdrop");
const aside = document.querySelector("aside");
const close = document.querySelector(".close");

menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  aside.classList.add("active");
  backdrop.classList.add("active");
});

close.addEventListener("click", (e) => {
  e.preventDefault();
  aside.classList.remove("active");
  backdrop.classList.remove("active");
});

rwdBtn.addEventListener("click", (e) => {
  e.preventDefault();
  aside.classList.add("active");
  backdrop.classList.add("active");
});

backdrop.addEventListener("click", () => {
  aside.classList.remove("active");
  backdrop.classList.remove("active");
});
