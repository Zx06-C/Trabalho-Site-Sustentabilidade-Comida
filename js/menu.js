let navVar = document.querySelector("#header");

document.addEventListener("scroll", () => {
  let scrolltop = window.scrollY;

  if (scrolltop > 0) {
    navVar.classList.add("rolar");
  } else {
    navVar.classList.remove("rolar");
  }
});
