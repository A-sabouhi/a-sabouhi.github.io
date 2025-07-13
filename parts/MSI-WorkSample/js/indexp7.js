/*const LinkImgs = document.querySelectorAll(".p7slider a");
const Images = document.querySelectorAll(".p7slider a img");
const Linktexts = document.querySelectorAll(".p7textBox a");
const TextBoxs = document.querySelectorAll(".p7textBox a .p7tBMini");
const BTNS = document.querySelectorAll(".p7miniCommand");
// ++++++++++++++++++++++++++++++++++++++++comment----------
// function activeBox() {
//     for [i] in LinkImgs && [j] in Images && [k] in Linktexts && [l] in TextBoxs && [m] in BTNS{
//         if i == 1 {
//             j == 1;
//             k == 1;
//             l == 1;
//             m == 1
//         }
//     };
// };
// =======================================end of comment
function normalWidth() {
    BTNS[0].classList.remove("p7miniCommandActive");
    BTNS[1].classList.remove("p7miniCommandActive");
    BTNS[2].classList.remove("p7miniCommandActive");
    BTNS[3].classList.remove("p7miniCommandActive");
    BTNS[4].classList.remove("p7miniCommandActive");
    BTNS[5].classList.remove("p7miniCommandActive");
    BTNS[6].classList.remove("p7miniCommandActive");
}
BTNS[0].addEventListener("click", function () {
    normalWidth();
    BTNS[0].classList.add("p7miniCommandActive");
});
BTNS[1].addEventListener("click", function () {
    normalWidth();
    BTNS[1].classList.add("p7miniCommandActive");
});
BTNS[2].addEventListener("click", function () {
    normalWidth();
    BTNS[2].classList.add("p7miniCommandActive");
});
BTNS[3].addEventListener("click", function () {
    normalWidth();
    BTNS[3].classList.add("p7miniCommandActive");
});
BTNS[4].addEventListener("click", function () {
    normalWidth();
    BTNS[4].classList.add("p7miniCommandActive");
});
BTNS[5].addEventListener("click", function () {
    normalWidth();
    BTNS[5].classList.add("p7miniCommandActive");
});
BTNS[6].addEventListener("click", function () {
    normalWidth();
    BTNS[6].classList.add("p7miniCommandActive");
});


function OpacityFull() {

}
setinterval(function () {

}, 500);*/

const p7BTNs = document.querySelectorAll(".p7miniBTNs");
const p7Pic = document.querySelector(".p7picBoxmini img");
const p7Texth5 = document.querySelector(".p7textBoxmini h5 b");
const p7Textp = document.querySelector(".p7textBoxmini p");
// const p7TextLink = document.querySelector("p7textBoxmini a");
// const p7PicLink = document.querySelector(".p7picBoxmini a");
// function p7Active1(Bt) {

//     for (let i = 0; i <= BTNs.lenght; i++) {
//         Bt[i].classList.remove("p7miniBTNs_whActive");
//         Bt[i].classList.add("p7miniBTNs_whInactive");
//     }

// }

function p7Active1() {
    p7BTNs[0].classList.remove("p7miniBTNs_whActive");
    p7BTNs[0].classList.add("p7miniBTNs_whInactive");
    p7BTNs[1].classList.remove("p7miniBTNs_whActive");
    p7BTNs[1].classList.add("p7miniBTNs_whInactive");
    p7BTNs[2].classList.remove("p7miniBTNs_whActive");
    p7BTNs[2].classList.add("p7miniBTNs_whInactive");
    p7BTNs[3].classList.remove("p7miniBTNs_whActive");
    p7BTNs[3].classList.add("p7miniBTNs_whInactive");
    p7BTNs[4].classList.remove("p7miniBTNs_whActive");
    p7BTNs[4].classList.add("p7miniBTNs_whInactive");
    p7BTNs[5].classList.remove("p7miniBTNs_whActive");
    p7BTNs[5].classList.add("p7miniBTNs_whInactive");
    p7BTNs[6].classList.remove("p7miniBTNs_whActive");
    p7BTNs[6].classList.add("p7miniBTNs_whInactive");
}

p7BTNs[0].addEventListener("click", function () {
    p7Active1();
    p7BTNs[0].classList.add("p7miniBTNs_whActive");
    p7Pic.src = "images/p7/imgs/bannerMini1.jpeg";
    console.log(p7Pic.getAttribute("src"));
    // let p7imgB = document.querySelector(".p7picBoxmini");
    // setInterval(
    //     p7imgB.style.opacity = "0.5", 3000)
    p7Texth5.innerHTML = "EV Charging Solutions";
    p7Textp.innerHTML = "Smart Charging for Business and Home";
    // p7TextLink.src = "https://www.msi.com/Landing/evse";
    // p7PicLink.src = "https://www.msi.com/Landing/evse";
})
p7BTNs[1].addEventListener("click", function () {
    p7Active1();
    p7BTNs[1].classList.add("p7miniBTNs_whActive");
    p7Pic.src = "images/p7/bannerMini2.jpeg";
    p7Texth5.innerHTML = "Rugged Tablet";
    p7Textp.innerHTML = "Professional Design & Manufacture Service.";
    // p7TextLink.src = "https://ruggedtablet.msi.com/";
    // p7PicLink.src = "https://ruggedtablet.msi.com/";
})
p7BTNs[2].addEventListener("click", function () {
    p7Active1();
    p7BTNs[2].classList.add("p7miniBTNs_whActive");
    p7Pic.src = "images/p7/bannerMini3.jpeg";
    p7Texth5.innerHTML = "ServerServer, Networking & IIoT";
    p7Textp.innerHTML = "Global Forerunner Hardware Provider.";
    // p7TextLink.src = "https://eps.msi.com/";
    // p7PicLink.src = "https://eps.msi.com/";
})
p7BTNs[3].addEventListener("click", function () {
    p7Active1();
    p7BTNs[3].classList.add("p7miniBTNs_whActive");
    p7Pic.src = "images/p7/bannerMini4.jpeg";
    p7Texth5.innerHTML = "FUNTORO Solutions";
    p7Textp.innerHTML = "Global Leader in Vehicle Infotainment & Telematics";
    // p7TextLink.src = "https://www.funtoro.com/global/";
    // p7PicLink.src = "https://www.funtoro.com/global/";
})
p7BTNs[4].addEventListener("click", function () {
    p7Active1();
    p7BTNs[4].classList.add("p7miniBTNs_whActive");
    p7Pic.src = "images/p7/bannerMini5.jpeg";
    p7Texth5.innerHTML = "Automotive and Commercial";
    p7Textp.innerHTML = "Your Best ODM Partner of AIoT Solution";
    // p7TextLink.src = "https://acs.msi.com/";
    // p7PicLink.src = "https://acs.msi.com/";
})
p7BTNs[5].addEventListener("click", function () {
    p7Active1();
    p7BTNs[5].classList.add("p7miniBTNs_whActive");
    p7Pic.src = "images/p7/bannerMini6.jpeg";
    p7Texth5.innerHTML = "Autonomous Mobile Robot (AMR)";
    p7Textp.innerHTML = "AI , Automation and Robotics";
    // p7TextLink.src = "https://amr.msi.com/";
    // p7PicLink.src = "https://amr.msi.com/";
})
p7BTNs[6].addEventListener("click", function () {
    p7Active1();
    p7BTNs[6].classList.add("p7miniBTNs_whActive");
    p7Pic.src = "images/p7/bannerMini7.jpeg";
    p7Texth5.innerHTML = "AIoT & Industrial Solutions";
    p7Textp.innerHTML = "Provide Embedded Boards & Systems with Longevity Support";
    // p7TextLink.src = "https://ipc.msi.com/";
    // p7PicLink.src = "https://ipc.msi.com/";
})
