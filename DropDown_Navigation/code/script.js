

/* Function to open and close header */


//------------------------------------------------------------

// open side nav
const openNav = document.querySelector('#fa-bars');
openNav.addEventListener('click', function () {


    // check code if its less than 760px

    if (window.matchMedia("(max-width: 760px)").matches) {
        // display header on side bar
        header = document.querySelector('#header').style.display = "flex";

        // hide open button and display close button
        openNav.style.display = "none";
        closeNav.style.display = "block";
    }
});


//------------------------------------------------------------

// close side nav
const closeNav = document.querySelector('#fa-times');

closeNav.addEventListener('click', function () {

    // check code if its less than 760px

    if (window.matchMedia("(max-width: 760px)").matches) {
        // hide header on side bar
        header = document.querySelector('#header').style.display = "none";

        // hide close button and display open button
        closeNav.style.display = "none";
        openNav.style.display = "block";
    }



});

/* Dropdown content display */
const dropdown = document.querySelectorAll(".dropdown-content");

dropdown.addEventListener("click", function () {

    // if open not close and if close open
    if (dropdown.style.display == "none") {
        dropdown.style.display = "block";
    }
    else
        dropdown.style.display = "block";
}
);