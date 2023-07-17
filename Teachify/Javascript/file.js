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


/* Show and hide nav menu */
const menu = document.querySelector('.nav-menu');
const open_btn = document.getElementById('open-menu-btn');
const close_btn = document.getElementById('close-menu-btn');

open_btn.addEventListener('click', () => {
    menu.style.display = 'flex';
    close_btn.style.display = 'inline-block';
    open_btn.style.display = 'none';
})

// close nav menu
const closeNav = () => {
    menu.style.display = 'none'
    close_btn.style.display = 'none';
    open_btn.style.display = 'inline-block';
}

