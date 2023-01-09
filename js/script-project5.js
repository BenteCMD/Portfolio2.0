


// scrolleffect

var projectInfo = document.querySelector(".project-info")
var arrow = document.querySelector("#arrow1")

function naarProjectInfo() {
    projectInfo.scrollIntoView({behavior: 'smooth'})
}

arrow.addEventListener("click", naarProjectInfo)




var opdracht = document.querySelector("#opdracht")
var opdrachth3 = document.querySelector("#opdracht h3")
var opdrachtA = document.querySelector("#opdracht-a")

function naarOpdracht() {
    opdracht.scrollIntoView({behavior: 'smooth'})
}

opdrachtA.addEventListener("click", naarOpdracht)


function veranderKleur() {
    var hT = $('#opdracht h3').offset().top,
        hH = $('#opdracht h3').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
        opdrachtA.classList.add("bolder")
        procesA.classList.remove("bolder")
        resultaatA.classList.remove("bolder")
    }
 }

 window.addEventListener("scroll", veranderKleur)




var proces = document.querySelector("#proces")
var procesh3 = document.querySelector("#proces h3")
var procesA = document.querySelector("#proces-a")

function naarProces() {
    proces.scrollIntoView({behavior: 'smooth'})
}

procesA.addEventListener("click", naarProces)


function veranderKleur2() {
    var hT = $('#proces h3').offset().top,
        hH = $('#proces h3').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
        procesA.classList.add("bolder")
        opdrachtA.classList.remove("bolder")
        resultaatA.classList.remove("bolder")
    }
 }

 window.addEventListener("scroll", veranderKleur2)




var resultaat = document.querySelector("#resultaat")
var resultaath3 = document.querySelector("#resultaat h3")
var resultaatA = document.querySelector("#resultaat-a")

function naarResultaat() {
    resultaat.scrollIntoView({behavior: 'smooth'})
}

resultaatA.addEventListener("click", naarResultaat)


function veranderKleur3() {
    var hT = $('#resultaat h3').offset().top,
        hH = $('#resultaat h3').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
        resultaatA.classList.add("bolder")
        opdrachtA.classList.remove("bolder")
        procesA.classList.remove("bolder")
    }
 }

 window.addEventListener("scroll", veranderKleur3)





var topPage = document.querySelector(".casestudy")
var backToTopBtn = document.querySelector("#back-to-top")

function backToTop() {
    topPage.scrollIntoView({behavior: 'smooth'})
}

backToTopBtn.addEventListener("click", backToTop)




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
        terugknop.style.transform = "translateY(5px)"
    } else {
        terugknop.style.transform = "translateY(0px)"
    }
}

window.addEventListener("scroll", naarBeneden)


//progressbar


function updateProgressBar() {
    const { scrollTop, scrollHeight } = document.documentElement;
    const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%'

    document.querySelector('#progressbar').style.setProperty('--progress', scrollPercent)
}


document.addEventListener("scroll", updateProgressBar)




//darkmode

let darkMode = localStorage.getItem("darkMode")
const darkModeToggle = document.querySelector("#dark-mode-toggle")
var toggle = document.querySelector("#toggle")
var sun = document.querySelector("#sun")
var sunset = document.querySelector("#sunset")
var skateBanner= document.querySelector("#banner-skate")
var skatecane = document.querySelector("#skatecane")
var skateGirl= document.querySelector("#skategirl")

const enableDarkMode = () => {
    document.documentElement.classList.add("dark-mode")
    skatecane.src="images/skatecanee-dark.svg"
   skateBanner.src="images/skatecane-dark.svg"
   skateGirl.src="images/skategirl-dark.svg"

    localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = () => {
    document.documentElement.classList.remove("dark-mode")
    skateBanner.src="images/skatecane.svg"
    skatecane.src="images/skatecanee.svg"
    skateGirl.src="images/skategirl.svg"
  
    localStorage.setItem('darkMode', 'disabled')
}


if(darkMode === 'enabled') {
    enableDarkMode()
    setTimeout(() => {
      sunset.style.display="block"
      sun.style.display="none"
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
          }, 100)
    } else {
        disableDarkMode()
        setTimeout(() => {
            sunset.style.display="none"
            sun.style.display="block"
          }, 100)
    }
   
})
