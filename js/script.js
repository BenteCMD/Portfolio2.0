
var pupils = document.getElementsByClassName("ball")

document.onmousemove = function(eye){
    var x = eye.clientX * 100 / window.innerWidth + "%" 
    var y = eye.clientY * 100 / window.innerHeight + "%" 
    // clientX => horizontale coördinaten van je muis
    // clientY => verticale coördinaten van je muis
    // window.innerWidth => browser width
    // window.innerHeight => browser height
    // rekensom: je vermenigvuldigd de coördinaten eerst met 100 en dan deel je het door het breedte/hoogte percentage, zodat het relatief is

    for(var i=0;i<6;i++) {
        pupils[i].style.left = x
        pupils[i].style.top = y
        pupils[i].style.transform = "translate(-"+x+",-"+y+")"
    }
}




var body = document.querySelector("body")
var ctaBtn = document.querySelector("#cta-btn")
var logo = document.querySelector("#logo")
var bg = document.querySelector("#bg")
var eyes = document.querySelector(".eyes")
var h2 = document.querySelector("#h2-wrapper")
var ik = document.querySelector("#moi")
var clouds = document.querySelector("#clouds")
var aboutSection = document.querySelector("main")

function openPortfolio() { 
  bg.classList.add("zoom-in")
  ctaBtn.style.display="none"
  eyes.style.display="none"
  h2.style.display="none"
  ik.style.display="none"
  clouds.style.display="none"
  aboutSection.classList.add("verschijnen")
}

ctaBtn.addEventListener("click", openPortfolio)

function backTolanding() {
  bg.classList.remove("zoom-in")
  ctaBtn.style.display="block"
  eyes.style.display="block"
  h2.style.display="block"
  ik.style.display="block"
  clouds.style.display="block"
  aboutSection.classList.remove("verschijnen")
}

logo.addEventListener("click", backTolanding)




var a = document.querySelectorAll("header nav ul li a")
var a1 = document.querySelector("header nav ul li a:first-of-type")
var a2 = document.querySelector("#projecten-a")
var a3 = document.querySelector("#contact-a")

var scrollTrigger2 = 600
var scrollTrigger3 = 1200
var scrollTrigger4 = 1800

function veranderClr() {  
  if (window.scrollY < scrollTrigger2) {

    for(var i=0;i<3;i++) {
      a[i].style.color="#4D4D4D"
    
    }
  }

  if (window.scrollY >= scrollTrigger2) {
    a2.style.color="#4D4D4D"
  
    a1.style.color="#648056"
    a1.style.fontWeight="600"
   
  }

  if (window.scrollY >= scrollTrigger3) {
    a1.style.color="#4D4D4D"
   
    a3.style.color="#4D4D4D"
   
    a2.style.color="#648056"
    
  }

  if (window.scrollY >= scrollTrigger4) {
    a2.style.color="#4D4D4D"
    
    a3.style.color="#648056"
    
  }
}

window.addEventListener("scroll", veranderClr)
