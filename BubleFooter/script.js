
const wrapper = document.getElementById('bublle-wrapper');

const animate_button = x =>{
    const bubble = document.createElement("div");

    bubble.className = "bubble";

    bubble.style.left = `${x}px`

    wrapper.appendChild(bubble);

    setTimeout(() =>wrapper.removeChild(bubble),200);
}

window.onmousemove = e => animate_button(e.clientX)