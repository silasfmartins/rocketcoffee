document.getElementById("code").innerText = "<Great Code />";

const nav = document.querySelector(".nav-list");
const btnMenu = document.querySelector("#buger-open");
const menu = document.querySelector(".menu-mobile");

var imgAtual = "menu-buguer-close.svg";
var imgAnterior = "menu-buguer-open.svg";

function handleButtonClick(event) {
  if (event.type === "touchstart") event.preventDefault();
  event.stopPropagation();
  nav.classList.toggle("active")
  handleClickOutside(menu, () => {
    nav.classList.remove("active");
  });
  toogleIcon()
}

function toogleIcon() {
  btnMenu.src = imgAtual;
  let aux = imgAtual;
  imgAtual = imgAnterior;
  imgAnterior = aux;
}

function handleClickOutside(targetElement, callback) {
  const html = document.documentElement;
  function handleHTMLClick(event) {
    if(!targetElement.contains(event.target)) {
      targetElement.removeAttribute('data-target');
      html.addEventListener("click", handleHTMLClick);
      html.addEventListener("touchstart", handleHTMLClick);
      callback();
    }
  }

  if (!targetElement.hasAttribute('data-target')) {
    html.addEventListener("click", handleHTMLClick);
    html.addEventListener("touchstart", handleHTMLClick);
    targetElement.setAttribute("data-target", "")
  }
}

btnMenu.addEventListener("click", handleButtonClick);
btnMenu.addEventListener("touchstart", handleButtonClick);