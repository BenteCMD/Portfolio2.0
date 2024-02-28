

//dark mode

let darkMode = localStorage.getItem("darkMode")
const darkModeToggle = document.querySelector("#dark-mode-toggle")
var toggle = document.querySelector("#toggle")
var sun = document.querySelector("#sun")
var sunset = document.querySelector("#sunset")
var menuProj = document.querySelector("#menu")
var fridgeProj = document.querySelector("#rmdd")
var skateProj = document.querySelector("#skate")
var ccProj = document.querySelector("#cc")
var xxxploreProj = document.querySelector("#xxxplore")
  
const enableDarkMode = () => {
    document.documentElement.classList.add("dark-mode")
    
    menuProj.src="images/inclusive-dark.svg"
    fridgeProj.src="images/fridge-dark.png"
    skateProj.src="images/skate-dark.png"
    ccProj.src="images/cc-dark.png"
    xxxploreProj.src="images/xxxplore-dark.png"

    localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = () => {
    document.documentElement.classList.remove("dark-mode")

    menuProj.src="images/inclusive-cloud.svg"
    fridgeProj.src="images/fridge-cloud.png"
    skateProj.src="images/skate-cloud.png"
    ccProj.src="images/cc-cloud.png"
    xxxploreProj.src="images/xxxplore-cloud.png"

    localStorage.setItem('darkMode', 'disabled')
}


if(darkMode === 'enabled') {
    enableDarkMode()
    setTimeout(() => {
      sunset.style.display="block"
      sun.style.display="none"
      toggle.style.backgroundColor = "white"
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
            toggle.style.backgroundColor = "white"
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
