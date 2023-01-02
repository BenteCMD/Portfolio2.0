

//dark mode

let darkMode = localStorage.getItem("darkMode")
const darkModeToggle = document.querySelector("#dark-mode-toggle")
var toggle = document.querySelector("#toggle")
var sun = document.querySelector("#sun")
var sunset = document.querySelector("#sunset")
       
  
const enableDarkMode = () => {
    document.documentElement.classList.add("dark-mode")

    localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = () => {
    document.documentElement.classList.remove("dark-mode")
  
    localStorage.setItem('darkMode', 'disabled')
}


if(darkMode === 'enabled') {
    enableDarkMode()
    setTimeout(() => {
      sunset.style.display="block"
      sun.style.display="none"
      toggle.style.backgroundColor = "#ed686d"
    }, 100)
    toggle.classList.toggle("toggle")
} 

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode")
    toggle.classList.toggle("toggle")
    
    if(darkMode !== 'enabled') {
        enableDarkMode()
        setTimeout(() => {
            sunset.style.display="block"
            sun.style.display="none"
            toggle.style.backgroundColor = "#ed686d"
          }, 100)
    } else {
        disableDarkMode()
        setTimeout(() => {
            sunset.style.display="none"
            sun.style.display="block"
            toggle.style.backgroundColor = "white"
          }, 100)
    }
   
})



// scrolleffect

var projectInfo = document.querySelector("#project-info")
var arrow = document.querySelector("#arrow")

function naarProjectInfo() {
    projectInfo.scrollIntoView({behavior: 'smooth'})
}

arrow.addEventListener("click", naarProjectInfo)


var topPage = document.querySelector("#main-casestudy")
var backToTopBtn = document.querySelector("#back-to-top")

function backToTop() {
    topPage.scrollIntoView({behavior: 'smooth'})
}

backToTopBtn.addEventListener("click", backToTop)





// animation omhoog

var mockup = document.querySelector("#mockup-fridge")
var scrollTrigger1 = 700

function beweegOmhoog() {  
    if (window.scrollY >= scrollTrigger1) {
    mockup.classList.add("omhoog")
    } else {
        mockup.classList.remove("omhoog")
    }

}

window.addEventListener("scroll", beweegOmhoog)


// header

var header = document.querySelector("#header")

var scrollTrigger = 30

window.addEventListener("scroll", veranderHeader)

function veranderHeader() {

  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) { 
    header.classList.add("background-header-project")
    
  } else {
    header.classList.remove("background-header-project") 
  }
}


// terugknop

var scrollTrigger2 = 80
var terugknop = document.querySelector("#titel-terugknop")

function naarBeneden() {
    if (window.scrollY >= scrollTrigger2 || window.pageYOffset >= scrollTrigger2) { 
        terugknop.style.transform = "translateY(-45px)"
    } else {
        terugknop.style.transform = "translateY(0px)"
    }
}

window.addEventListener("scroll", naarBeneden)