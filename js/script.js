const button = document.querySelector(".icon");
const nav = document.querySelector(".nav-link");
// window.addEventListener("loa");
button.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa")) {
    e.target.parentElement.children[0].classList.toggle("fa-bars");
    e.target.parentElement.children[0].classList.toggle("fa-times");
    nav.classList.toggle("show-link");
  }
});
