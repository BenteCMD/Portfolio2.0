
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



var ctaBtn = document.querySelector("#cta-btn")
var firstSection = document.querySelector("main")
var frontPage = document.querySelector("#header-wrapper")

function openPortfolio() { 
  firstSection.scrollIntoView({behavior: 'smooth'})
}

ctaBtn.addEventListener("click", openPortfolio)


var scrollTrigger1 = 80

function scrollOvergang() {

if (window.scrollY >= scrollTrigger1 || window.pageYOffset >= scrollTrigger1) {
  frontPage.classList.add("be-gone")

} else {
  frontPage.classList.remove("be-gone")
}

}

window.addEventListener("scroll", scrollOvergang)