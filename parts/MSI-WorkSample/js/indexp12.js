
// setting ++++++++++++++++++++++++++++++++++
const Setting = document.querySelector(".p12setting");
const SettingBox = document.querySelector(".p12settingBox");
const Close = document.querySelector(".p12CloseInSettingBox");

Setting.addEventListener("click", function () {
    SettingBox.classList.toggle("settingToZiro");
})
Close.addEventListener("click", function () {
    SettingBox.classList.remove("settingToZiro");
})
// ---------------------------------------------


// switch-button ++++++++++++++++++++++++++++++++
const Button1 = document.querySelectorAll(".p12switch-button");
const Switch1 = document.querySelectorAll(".p12switchOn");

Switch1[0].addEventListener("click", function () {
    Button1[0].classList.toggle("switch-button-position");
    // Button1[1].classList.toggle("switch-button-position");
    // Button1[2].classList.toggle("switch-button-position");
})
Switch1[1].addEventListener("click", function () {
    Button1[1].classList.toggle("switch-button-position");
})
Switch1[2].addEventListener("click", function () {
    Button1[2].classList.toggle("switch-button-position");
})
// ----------------------------------------------

