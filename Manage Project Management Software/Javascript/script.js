const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

/* Change open and close states of hamburger */
btn.addEventListener('click', () =>{
    btn.classList.add('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
})


document.addEventListener('click', (e) => {
    if (e.target !== nav && e.target !== btn) {
        btn.classList.remove('open');
        nav.classList.remove('flex');
        nav.classList.add('hidden');
    }
})