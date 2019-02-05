const menu = document.querySelector(".menu");
const menuBtn = menu.querySelector(".menu__burger");

menuBtn.onclick = e => {
    menu.classList.toggle("menu_closed");
    menuBtn.classList.toggle("menu__burger_closed");
};
