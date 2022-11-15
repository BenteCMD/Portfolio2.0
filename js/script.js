


//hamburger veranderen in kruisje

const nav = document.querySelector("header nav")
const menuBtn = document.querySelector("#hamburger")

function openMenu() {
    menuBtn.classList.toggle('open');
    nav.classList.toggle('toonMenu')
}

menuBtn.addEventListener("click", openMenu)






























