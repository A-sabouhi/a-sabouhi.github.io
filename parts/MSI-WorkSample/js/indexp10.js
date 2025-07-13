"use strict"
const BTNS_new = document.querySelectorAll(".p10minifooterLiJs");
const ExBox = document.querySelectorAll(".p10miniExpand");
const CloseB = document.querySelectorAll(".p10closeB span")

function btn0() {
    ExBox[0].classList.add("p10miniExpandH0");
    CloseB[0].classList.add("p10closeBMove");
}
function btn1() {
    ExBox[1].classList.add("p10miniExpandH0");
    CloseB[1].classList.add("p10closeBMove");
}
function btn2() {
    ExBox[2].classList.add("p10miniExpandH0");
    CloseB[2].classList.add("p10closeBMove");
}
function btn3() {
    ExBox[3].classList.add("p10miniExpandH0");
    CloseB[3].classList.add("p10closeBMove");
}
function btn4() {
    ExBox[4].classList.add("p10miniExpandH0");
    CloseB[4].classList.add("p10closeBMove");
}

BTNS_new[0].addEventListener("click", function () {
    btn1(); btn2(); btn3(); btn4();
    ExBox[0].classList.toggle("p10miniExpandH0");
    CloseB[0].classList.toggle("p10closeBMove");
});
BTNS_new[1].addEventListener("click", function () {
    btn0(); btn2(); btn3(); btn4();
    ExBox[1].classList.toggle("p10miniExpandH0");
    CloseB[1].classList.toggle("p10closeBMove");
});
BTNS_new[2].addEventListener("click", function () {
    btn0(); btn1(); btn3(); btn4();
    ExBox[2].classList.toggle("p10miniExpandH0");
    CloseB[2].classList.toggle("p10closeBMove");
});
BTNS_new[3].addEventListener("click", function () {
    btn0(); btn1(); btn2(); btn4();
    ExBox[3].classList.toggle("p10miniExpandH0");
    CloseB[3].classList.toggle("p10closeBMove");
});
BTNS_new[4].addEventListener("click", function () {
    btn0(); btn1(); btn2(); btn3();
    ExBox[4].classList.toggle("p10miniExpandH0");
    CloseB[4].classList.toggle("p10closeBMove");
});
