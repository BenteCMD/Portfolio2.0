var visualPart = document.querySelector("#visual-info")
var codePart = document.querySelector("#coding-info")
var uxPart = document.querySelector("#ux-info")
var visualPartDark = document.querySelector("#visual-info-dark")
var codePartDark = document.querySelector("#coding-info-dark")
var uxPartDark = document.querySelector("#ux-info-dark")
var skillsCirkel = document.querySelector("#skills-diagram")
var aboutSection = document.querySelector("#about-flex")
var about = document.querySelector("#about-section")
var me = document.querySelector("#ik")
var back = document.querySelector("#back")


function showSkills() {

  me.style.transform = "translateY(1000px)"
  aboutSection.style.display="none"

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

  aboutSection.style.display="block"
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
    skillsCirkel.src="images/skills-dark.png"
    visualPart.src="images/visualpart-dark.svg"
    codePart.src="images/code-dark.svg"
    uxPart.src="images/ux-dark.svg"

    localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = () => {
    document.documentElement.classList.remove("dark-mode")
    skillsCirkel.src="images/skills.svg"
    visualPart.src="images/visual.svg"
    codePart.src="images/coding.svg"
    uxPart.src="images/ux.svg"

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












