var loader = document.querySelector(".loader-wrapper");

window.addEventListener("load", hidePreloader);

function hidePreloader() {
  loader.classList.add("hide-preloader");
}
