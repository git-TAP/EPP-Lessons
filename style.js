let menuButton = document.querySelector(".button-menu1");
let container = document.querySelector(".container1");
let pageContent = document.querySelector(".page-content1");
let responsiveBreakpoint = 991;

if (window.innerWidth <= responsiveBreakpoint) {
  container.classList.add("nav-closed1");
}

menuButton.addEventListener("click", function () {
  container.classList.toggle("nav-closed1");
});

pageContent.addEventListener("click", function () {
  if (window.innerWidth <= responsiveBreakpoint) {
    container.classList.add("nav-closed1");
  }
});


window.addEventListener("resize", function () {
  if (window.innerWidth > responsiveBreakpoint) {
    container.classList.remove("nav-closed1");
  }
});

