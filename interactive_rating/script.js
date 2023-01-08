


const paragraphs = document.querySelectorAll('p.it');
submit = document.querySelector('p#submit');

paragraphs.forEach(function (paragraph) {
    paragraph.addEventListener('click', function () {

        // reset other colors
        paragraphs.forEach(function (p) {
            p.style.backgroundColor = "var(--Very-Dark-Blue)";
        });

        // set color for clicked button
        paragraph.style.backgroundColor = 'var(--orange)';

        message = `You have clicked ${paragraph.textContent} out of 5`;
        submit.value = message
        alert(submit.value);

    })
});

submit.addEventListener('click', function (event) {
    sessionStorage.setItem('value', submit.value);
    window.location.href = "./thankYou.html"
});

// retrive value from sessionStorage and display it on thank you page

const text = document.querySelectorAll('h3.me');

text.addEventListener('click', function(){
    alert("Hello")
})


