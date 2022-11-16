


//hamburger veranderen in kruisje

const nav = document.querySelector("header nav")
const menuBtn = document.querySelector("#hamburger")
const darkToggle = document.querySelector("#dark-mode-toggle")

function openMenu() {
    menuBtn.classList.toggle('open')
    nav.classList.toggle('toonMenu')

    if (menuBtn.classList.contains('open')) {
        setTimeout(() => {
            darkToggle.style.display="block"
            darkToggle.style.top = "32em"
            darkToggle.style.left = "10em"
        }, 300)
    } else {
        darkToggle.style.display="none"
    }

}

menuBtn.addEventListener("click", openMenu)






























