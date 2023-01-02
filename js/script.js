


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





//header veranderen wanneer je scrollt //

var header = document.querySelector("#header")

var scrollTrigger = 30

window.addEventListener("scroll", veranderHeader)

function veranderHeader() {

  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) { 
    header.classList.add("background-header")
    
  } else {
    header.classList.remove("background-header") 
  }
}

























