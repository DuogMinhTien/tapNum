const $ = document.querySelector.bind (document);
const $$ = document.querySelectorAll.bind (document);

const playArea = $("#play-area");

function random (from, to) {

    return    Math.floor((Math.random() * to) + from);
}

var number = 0;

var styleColor1 = ["#6C7EE1", "#92B9E3", "#FFC4A4", "#FBA2D0", "#C688EB"];

window.scroll ({
    top: $("section").offsetHeight,
    left: 100,
    behavior: 'smooth'
});

window.addEventListener ("click", () => {
    let spanEle = document.createElement ("span");
    spanEle.textContent = ++number;
    spanEle.classList.add ("number");
    spanEle.style.color = styleColor1[random(0,styleColor1.length)];
    spanEle.style.setProperty ("--i",random (-35,65) + "deg");
    playArea.appendChild (spanEle);
    setTimeout (() => {
        playArea.removeChild (spanEle);
        delete spanEle;
    },1000);

})