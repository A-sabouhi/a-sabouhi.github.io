const p12close = document.querySelector(".p12closeCross");
const Balloon = document.querySelector(".p12MainBox");

p12close.addEventListener("click", function () {
    Balloon.classList.add("p12CloseB");
})