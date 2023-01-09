const slider = document.querySelector('.doctor-slideshow');
let isDown = false;
let startX;
let scrollLeft;

const sliderInterval = setInterval(() => {
    // change scroll property to slide to left
    slider.scrollLeft += 1;

}, 200);

slider.addEventListener("click", function () {
    alert("Hello")
})
slider.addEventListener('mousedown', (e) => {
    // clear slider interval when user slides
    clearInterval(sliderInterval);
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', (e) => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', (e) => {
    isDown = false;
    slider.classList.add('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3 // scroll fast
    slider.scrollLeft = scrollLeft - walk
});