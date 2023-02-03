// get elements
var openButton = document.getElementById("fa-bars")
var closeButton = document.getElementById("fa-close")

var navBar = document.getElementById("nav-items")


/* Function to open and close header */


//------------------------------------------------------------

// open side nav

function checkOpen(){
navBar.style.display = "flex";
closeButton.style.display = "flex";
openButton.style.display = "none";
}

function checkClose(){
    navBar.style.display = "none";
    closeButton.style.display = "none";
    openButton.style.display = "flex";
}

//------------------------------------------------------------

// close side nav
openButton.addEventListener("click", checkOpen);
closeButton.addEventListener("click", checkClose);

/* Dropdown content display */



