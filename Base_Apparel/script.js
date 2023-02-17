// get input element and button
var emailInput = document.getElementById("email");
var submitButton = document.getElementById("submit");
var errorMessage = document.getElementById("error");
var errorIcon = document.getElementById("warning-icon")
// add event listener
submitButton.addEventListener("click", function () {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const isEmailValid = emailRegex.test(emailInput.value);
    if (!isEmailValid) {
        errorMessage.style.display = "block";
        errorIcon.style.display = "block";
    }
    else {
        errorMessage.style.display = "none";
        errorIcon.style.display = "none";
    }


});