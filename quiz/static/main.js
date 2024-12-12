

function displayScreenSize() {
    console.log("handler running!")
    document.querySelectorAll(".screen-size-info").forEach(elem => {
        elem.querySelector(".screen-size-info-width").innerText = window.screen.height;
        elem.querySelector(".screen-size-info-height").innerText = window.screen.width;
    })
};

console.log("script loaded!")
document.addEventListener("DOMContentLoaded", displayScreenSize);
