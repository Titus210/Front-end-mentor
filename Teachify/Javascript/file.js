/* change navbar style on scroll */
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 20);

})


/* Show and hide faq when faq  is clicked*/
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon when clicked
        const icon = faq.querySelector('.faq-icon i');
        if (icon.className == 'fa fa-plus') {
            icon.className = 'fa fa-minus'
        } else {
            icon.className = 'fa fa-plus'
        }
    })
})