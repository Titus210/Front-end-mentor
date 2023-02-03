// Get Elements
var open = document.getElementById("open")
var close = document.getElementById("close")
var navBar = document.getElementById("nav-bar")

// confirm if elements works properly
function checkOpen(){
   navBar.style.display = "flex";
   close.style.display = "flex";
   open.style.display = "none";
}
function checkClose(){
    navBar.style.display = "none";
    close.style.display = "none";
    open.style.display = "flex";   
}

open.addEventListener("click", checkOpen);
close.addEventListener("click", checkClose);
