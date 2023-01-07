


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
            darkToggle.style.top = "70%"
            darkToggle.style.left = "45%"
            darkToggle.style.transform = "translate(-50%, -50%)"
        }, 300)
    } else {
        // darkToggle.style.display="none"
        darkToggle.style.top = "1.5em"
        darkToggle.style.left = "8em"
        darkToggle.style.transform = "translate(0%)"
    }

}

menuBtn.addEventListener("click", openMenu)





//header veranderen wanneer je scrollt //

var header = document.querySelector("#header")

var scrollTrigger = 30

window.addEventListener("scroll", veranderHeader)

function veranderHeader() {

  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) { 
    if(document.documentElement.classList.contains("dark-mode")) {
    header.classList.add("background-header-dark")
    } else {
      header.classList.add("background-header")
    }
    
  } else {
    header.classList.remove("background-header") 
    header.classList.remove("background-header-dark") 
  }
}

























