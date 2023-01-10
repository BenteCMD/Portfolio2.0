
//ogen muis laten volgen

var pupils = document.getElementsByClassName("ball")

document.onmousemove = function(eye){
    var x = eye.clientX * 100 / window.innerWidth + "%" 
    var y = eye.clientY * 100 / window.innerHeight + "%" 
  
    for(var i=0;i<6;i++) {
        pupils[i].style.left = x
        pupils[i].style.top = y
        pupils[i].style.transform = "translate(-"+x+",-"+y+")"
    }
}


//portoflio openen

var body = document.querySelector("body")
var ctaBtn = document.querySelector("#cta-btn")
var logo = document.querySelector("#logo")
var bg = document.querySelector("#bg")
var eyes = document.querySelector(".eyes")
var h2 = document.querySelector("#h2-wrapper")
var ik = document.querySelector("#moi")
var clouds = document.querySelector("#clouds")
var aboutSection = document.querySelector("#hide")
var navAbout = document.querySelector("#about-a")
var codingInfo = document.querySelector("#coding-info")
var visualInfo = document.querySelector("#visual-info")
var uxInfo = document.querySelector("#ux-info")
var fotoIk = document.querySelector("#ik")
var wind = new Audio('sounds/wind.mp3');

function openPortfolio() { 
  bg.classList.add("zoom-in")
  ctaBtn.style.display="none"
  eyes.style.display="none"
  h2.style.display="none"
  ik.style.display="none"
  clouds.style.display="none"
  wind.play();
  wind.volume = 0.5;

  setTimeout(() => {
  aboutSection.style.display="block"
}, 1500)

  navAbout.classList.add("bolder")
}

ctaBtn.addEventListener("click", openPortfolio)
navAbout.addEventListener("click", openPortfolio)
// window.addEventListener("scroll", openPortfolio)

function backTolanding() {
  bg.classList.remove("zoom-in")
  wind.play();
  wind.volume = 0.5;

  setTimeout(() => {
    ctaBtn.style.display="block"
  }, 1350)
  setTimeout(() => {
    eyes.style.display="block"
      }, 1350)
  setTimeout(() => {
    h2.style.display="block"
      }, 1350)
  setTimeout(() => {
    ik.style.display="block"
      }, 1350)
  setTimeout(() => {
    clouds.style.display="block"
      }, 1350)
  aboutSection.style.display="none"
  navAbout.classList.remove("bolder")
}

logo.addEventListener("click", backTolanding)
// window.addEventListener("scroll", backTolanding)




//bg zoomed in maar toch responsive - quick fix

// function changeBg() {

//     bg.classList.add("bg-change")
// }

// ctaBtn.addEventListener("click", changeBg)


// function changeBgBack() {
//   bg.classList.remove("bg-change")
// }

// logo.addEventListener("click", changeBgBack)


//skillsdiagram show

var visualPart = document.querySelector("#visual-info")
var codePart = document.querySelector("#coding-info")
var uxPart = document.querySelector("#ux-info")
var visualPartDark = document.querySelector("#visual-info-dark")
var codePartDark = document.querySelector("#coding-info-dark")
var uxPartDark = document.querySelector("#ux-info-dark")
var skillsCirkel = document.querySelector("#skills-diagram")
var aboutContent = document.querySelector("#about-flex")
var about = document.querySelector("#about-section")
var me = document.querySelector("#ik")
var back = document.querySelector("#back2")


function showSkills() {

  me.style.transform = "translateY(1000px)"
  aboutContent.style.display="none"

  setTimeout(() => {
    about.classList.add("wider")
  }, 200)

  setTimeout(() => {
    back.style.opacity="100%"
    skillsCirkel.style.display="none"
  }, 500)

  if(document.documentElement.classList.contains("dark-mode")) {
    setTimeout(() => {
      visualPartDark.style.display = "block"
      codePartDark.style.display="block"
      uxPartDark.style.display="block"
    }, 500)
  
  } else {
    setTimeout(() => {
      visualPart.style.display = "block"
      codePart.style.display="block"
      uxPart.style.display="block"
    }, 500)
  }
}

skillsCirkel.addEventListener("click", showSkills)


function backToAbout() {

  visualPartDark.style.display = "none"
  codePartDark.style.display="none"
  uxPartDark.style.display="none"
  visualPart.style.display = "none"
  codePart.style.display="none"
  uxPart.style.display="none"
  back.style.opacity="0%"
  about.classList.remove("wider")
  aboutContent.style.display="block"
  skillsCirkel.style.display="block"
  me.style.transform = "translateY(0)"
  }

back.addEventListener("click", backToAbout)






//darkmode

let darkMode = localStorage.getItem("darkMode")
const darkModeToggle = document.querySelector("#dark-mode-toggle")
var toggle = document.querySelector("#toggle")
var sun = document.querySelector("#sun")
var sunset = document.querySelector("#sunset")


const enableDarkMode = () => {
    document.documentElement.classList.add("dark-mode")
    skillsCirkel.src="images/skillsdiagram-dark.png"
    visualPart.src="images/visual-dark.svg"
    codePart.src="images/code-dark.svg"
    uxPart.src="images/ux-dark.svg"

    setTimeout(() => {
      ik.src="images/ik-dark.svg"
    }, 100)
    setTimeout(() => {
      clouds.src="images/clouds-darkmode.svg"
    }, 160)

    localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = () => {
    document.documentElement.classList.remove("dark-mode")
    skillsCirkel.src="images/skills.png"
    visualPart.src="images/visual.svg"
    codePart.src="images/coding.svg"
    uxPart.src="images/ux.svg"

    setTimeout(() => {
      ik.src="images/mememe.svg"
    }, 100)
    setTimeout(() => {
      clouds.src="images/clouds.svg"
    }, 160)

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
          toggle.style.backgroundColor = "white"
        }, 100)
    }
})














