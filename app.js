const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const body = document.querySelector("body")
const mode = document.querySelector("#mode")
const hLinks = document.querySelectorAll("#hLink")

let modeimg = true;
hamburger.addEventListener("click", ()=>{
   menu.classList.toggle("hidden")
   //console.log("clicked")
})

hLinks.forEach(link=>{
    link.addEventListener("click", ()=>{
        menu.classList.toggle("hidden")
})
})

mode.addEventListener("click", ()=>{
    body.classList.toggle("dark")
    if (modeimg) {
        mode.src = "./images/mode-sun.png";
    } else {
        mode.src = "./images/mode-moon.png";
    }
      modeimg = !modeimg;
})
