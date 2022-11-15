
//darkmode

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


