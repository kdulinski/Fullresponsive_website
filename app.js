const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

// Navigation auto closing

function navAutoClosing() {
  if (window.innerWidth > 600) {
    links.classList.remove("show-links");
  }
}

window.addEventListener("resize", navAutoClosing);
// links.addEventListener("click", navAutoClosing); Nie wiem czemu nie działa
links.addEventListener("click", function () {
  links.classList.remove("show-links");
});
