const navItems = document.querySelectorAll(".li1");
const submenuBox = document.querySelectorAll(".expandBox");
// const findBox = document.getElementById("searchB");
const expandBox_search = document.querySelectorAll(".expandBox-Visibility")


for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
        navItems[i].addEventListener("click", function () {
            if (i == j) {
                submenuBox[j].classList.toggle("expandBox");
            }
            else {
                submenuBox[j].classList.add("expandBox");
            }
        });
    }
}

/*
navItems[0].addEventListener("click", function () {
    submenuBox[1].classList.add("expandBox");
    submenuBox[2].classList.add("expandBox");
    submenuBox[3].classList.add("expandBox");
    submenuBox[0].classList.toggle("expandBox");
})
navItems[1].addEventListener("click", function () {
    submenuBox[0].classList.add("expandBox");
    submenuBox[2].classList.add("expandBox");
    submenuBox[3].classList.add("expandBox");
    submenuBox[1].classList.toggle("expandBox");
})
navItems[2].addEventListener("click", function () {
    submenuBox[0].classList.add("expandBox");
    submenuBox[1].classList.add("expandBox");
    submenuBox[3].classList.add("expandBox");
    submenuBox[2].classList.toggle("expandBox");
})
navItems[3].addEventListener("click", function () {
    submenuBox[0].classList.add("expandBox");
    submenuBox[1].classList.add("expandBox");
    submenuBox[2].classList.add("expandBox");
    submenuBox[3].classList.toggle("expandBox");
})
*/
// findBox.addEventListener("click", function () {
//     submenuBox[0].classList.add("expandBox");
//     submenuBox[1].classList.add("expandBox");
//     submenuBox[2].classList.add("expandBox");
//     submenuBox[3].classList.add("expandBox");
//     findBox.classList.toggle("expandBox");
// })
// navigation Product--------------------------------------
const section2 = document.querySelectorAll(".secondcol");
const section3 = document.querySelectorAll(".thirdcol");
const section4 = document.querySelectorAll(".forthcol");
const mainBox = document.querySelectorAll(".firstcol");
const game = document.querySelector("#game");
const content = document.querySelector("#content");
const business = document.querySelector("#business");
const accessory = document.querySelector("#accessory");
function hideAll() {
    section2[0].classList.add("displayHide");
    section2[1].classList.add("displayHide");
    section2[2].classList.add("displayHide");
    section2[3].classList.add("displayHide");

    section3[0].classList.add("displayHide");
    section3[1].classList.add("displayHide");
    section3[2].classList.add("displayHide");
    section3[3].classList.add("displayHide");

    section4[0].classList.add("displayHide");
    section4[1].classList.add("displayHide");
    section4[2].classList.add("displayHide");
    section4[3].classList.add("displayHide");
}
function removeRed() {
    game.classList.remove("boldp");
    content.classList.remove("boldp");
    business.classList.remove("boldp");
    accessory.classList.remove("boldp");
}
mainBox[0].addEventListener("click", function () {
    hideAll();
    removeRed();
    game.classList.add("boldp");
    section2[0].classList.remove("displayHide");
    section3[0].classList.remove("displayHide");
    section4[0].classList.remove("displayHide");


})
mainBox[2].addEventListener("click", function () {
    hideAll();
    removeRed();
    content.classList.add("boldp");
    section2[1].classList.remove("displayHide");
    section3[1].classList.remove("displayHide");
    section4[1].classList.remove("displayHide");

})
mainBox[3].addEventListener("click", function () {
    hideAll();
    removeRed();
    business.classList.add("boldp");
    section2[2].classList.remove("displayHide");
    section3[2].classList.remove("displayHide");
    section4[2].classList.remove("displayHide");

})
mainBox[4].addEventListener("click", function () {
    hideAll();
    removeRed();
    accessory.classList.add("boldp");
    section2[3].classList.remove("displayHide");
    section3[3].classList.remove("displayHide");
    section4[3].classList.remove("displayHide");

})
// 8888888888888888888888888888888888888888888888888888888888888888888888part2
const EV1 = document.querySelector("#EV");
const server2 = document.querySelector("#server");
const automotive3 = document.querySelector("#Automotive");
const funtoro4 = document.querySelector("#funtoro");
const AMR5 = document.querySelector("#AMR");
const industry6 = document.querySelector("#Industrial");
const rugged7 = document.querySelector("#Rugged");
const BTNS = document.querySelectorAll(".AloTfirstcol");

function hideAll2() {
    EV1.classList.add("displayHide");
    server2.classList.add("displayHide");
    automotive3.classList.add("displayHide");
    funtoro4.classList.add("displayHide");
    AMR5.classList.add("displayHide");
    industry6.classList.add("displayHide");
    rugged7.classList.add("displayHide");

}

function removeRed2() {
    BTNS[0].classList.remove("boldp");
    BTNS[1].classList.remove("boldp");
    BTNS[2].classList.remove("boldp");
    BTNS[3].classList.remove("boldp");
    BTNS[4].classList.remove("boldp");
    BTNS[5].classList.remove("boldp");
    BTNS[6].classList.remove("boldp");
}

BTNS[0].addEventListener("click", function () {
    hideAll2();
    removeRed2();
    BTNS[0].classList.add("boldp");
    EV1.classList.remove("displayHide");
})
BTNS[1].addEventListener("click", function () {
    hideAll2();
    removeRed2();
    BTNS[1].classList.add("boldp");
    server2.classList.remove("displayHide");
})
BTNS[2].addEventListener("click", function () {
    hideAll2();
    removeRed2();
    BTNS[2].classList.add("boldp");
    automotive3.classList.remove("displayHide");
})
BTNS[3].addEventListener("click", function () {
    hideAll2();
    removeRed2();
    BTNS[3].classList.add("boldp");
    funtoro4.classList.remove("displayHide");
})
BTNS[4].addEventListener("click", function () {
    hideAll2();
    removeRed2();
    BTNS[4].classList.add("boldp");
    AMR5.classList.remove("displayHide");
})
BTNS[5].addEventListener("click", function () {
    hideAll2();
    removeRed2();
    BTNS[5].classList.add("boldp");
    industry6.classList.remove("displayHide");
})
BTNS[6].addEventListener("click", function () {
    hideAll2();
    removeRed2();
    BTNS[6].classList.add("boldp");
    rugged7.classList.remove("displayHide");
})
// 00000000000000000000000000000000000000000000000000000000000000000000
// p1minipicsBox
const p1pics = document.querySelectorAll(".productType");
const p1Box = document.querySelector(".p1mice");
const p1infoBox = document.querySelectorAll(".p1jsActive");
function p1picInvisible() {
    p1infoBox[0].classList.add("p1picData_d");
    p1infoBox[1].classList.add("p1picData_d");
    p1infoBox[2].classList.add("p1picData_d");
    p1infoBox[3].classList.add("p1picData_d");
    p1infoBox[4].classList.add("p1picData_d");
    p1infoBox[5].classList.add("p1picData_d");
    p1infoBox[6].classList.add("p1picData_d");
    p1infoBox[7].classList.add("p1picData_d");

    p1pics[0].classList.remove("p1picBoxBold");
    p1pics[1].classList.remove("p1picBoxBold");
    p1pics[2].classList.remove("p1picBoxBold");
    p1pics[3].classList.remove("p1picBoxBold");
    p1pics[4].classList.remove("p1picBoxBold");
    p1pics[5].classList.remove("p1picBoxBold");
    p1pics[6].classList.remove("p1picBoxBold");
    p1pics[7].classList.remove("p1picBoxBold");
    p1pics[8].classList.remove("p1picBoxBold");
}

p1pics[0].addEventListener("click", function () {
    p1picInvisible();
    p1Box.classList.add("p1mice_d");
    p1Box.classList.remove("p1mice_h");
    p1pics[0].classList.add("p1picBoxBold");
})

p1pics[1].addEventListener("click", function () {
    p1picInvisible();
    p1Box.classList.remove("p1mice_d");
    p1Box.classList.add("p1mice_h");
    p1infoBox[0].classList.remove("p1picData_d");
    p1pics[1].classList.add("p1picBoxBold");
})
p1pics[2].addEventListener("click", function () {
    p1picInvisible();
    p1Box.classList.remove("p1mice_d");
    p1Box.classList.add("p1mice_h");
    p1infoBox[1].classList.remove("p1picData_d");
    p1pics[2].classList.add("p1picBoxBold");
})
p1pics[3].addEventListener("click", function () {
    p1picInvisible();
    p1Box.classList.remove("p1mice_d");
    p1Box.classList.add("p1mice_h");
    p1infoBox[2].classList.remove("p1picData_d");
    p1pics[3].classList.add("p1picBoxBold");
})
p1pics[4].addEventListener("click", function () {
    p1picInvisible();
    p1Box.classList.remove("p1mice_d");
    p1Box.classList.add("p1mice_h");
    p1infoBox[3].classList.remove("p1picData_d");
    p1pics[4].classList.add("p1picBoxBold");
})
p1pics[5].addEventListener("click", function () {
    p1picInvisible();
    p1Box.classList.remove("p1mice_d");
    p1Box.classList.add("p1mice_h");
    p1infoBox[4].classList.remove("p1picData_d");
    p1pics[5].classList.add("p1picBoxBold");
})
p1pics[6].addEventListener("click", function () {
    p1picInvisible();
    p1Box.classList.remove("p1mice_d");
    p1Box.classList.add("p1mice_h");
    p1infoBox[5].classList.remove("p1picData_d");
    p1pics[6].classList.add("p1picBoxBold");
})
p1pics[7].addEventListener("click", function () {
    p1picInvisible();
    p1Box.classList.remove("p1mice_d");
    p1Box.classList.add("p1mice_h");
    p1infoBox[6].classList.remove("p1picData_d");
    p1pics[7].classList.add("p1picBoxBold");
})
p1pics[8].addEventListener("click", function () {
    p1picInvisible();
    p1Box.classList.remove("p1mice_d");
    p1Box.classList.add("p1mice_h");
    p1infoBox[7].classList.remove("p1picData_d");
    p1pics[8].classList.add("p1picBoxBold");
})
//'''''''''''''''''''''''''''''''''''''''' p2min expand Box in sm nav
// EB :Expand Box
// B:Box
const p2MiniB = document.querySelectorAll(".p2btnJs");
const p2MiniEB = document.querySelectorAll(".p2MiniHideJs");
const p2arrowDown = document.querySelectorAll(".p2icon");

// function p2CloseAllTabs() {
//     p2MiniEB[0].classList.remove("p2MiniExpand_position");
//     p2MiniEB[0].classList.add("p2MiniExpand");
// p2arrowDown[0].classList.add("p2subIconR")

//     p2MiniEB[1].classList.add("p2MiniExpand_position");
//     p2MiniEB[2].classList.add("p2MiniExpand_position");
//     p2MiniEB[3].classList.add("p2MiniExpand_position");
// };
p2MiniB[0].addEventListener("click", function () {
    // p2CloseAllTabs();
    p2arrowDown[0].classList.toggle("p2subIconR");
    p2MiniEB[0].classList.toggle("p2MiniExpand");
    setTimeout(p2MiniEB[0].classList.toggle("p2MiniExpand_position")), 1;
});
p2MiniB[1].addEventListener("click", function () {
    // p2CloseAllTabs();
    p2arrowDown[1].classList.toggle("p2subIconR");
    p2MiniEB[1].classList.toggle("p2MiniExpand");
    setTimeout(p2MiniEB[1].classList.toggle("p2MiniExpand_position")), 1;
});
p2MiniB[2].addEventListener("click", function () {
    // p2CloseAllTabs();
    p2arrowDown[2].classList.toggle("p2subIconR");
    p2MiniEB[2].classList.toggle("p2MiniExpand");
    setTimeout(p2MiniEB[2].classList.toggle("p2MiniExpand_position")), 1;
});
p2MiniB[3].addEventListener("click", function () {
    // p2CloseAllTabs();
    p2arrowDown[3].classList.toggle("p2subIconR");
    p2MiniEB[3].classList.toggle("p2MiniExpand");
    setTimeout(p2MiniEB[3].classList.toggle("p2MiniExpand_position")), 1;
});
// main3line menu Button
const p2minimenu = document.querySelector(".minitry1");
const p2miniBox = document.querySelector(".p2navBarMini");

p2minimenu.addEventListener("click", function () {
    p2miniBox.classList.toggle("p2navBarMain_display");
})


// -------------------------------------------closeButton -X- in expandbox:
const products = document.querySelector(".products");
const p2NavClose = document.querySelectorAll(".p2closeNav");
p2NavClose[0].addEventListener("click", function(){
products.classList.toggle("expandBox")
});
const alts = document.querySelector(".AloT-solutions");
p2NavClose[1].addEventListener("click", function(){
alts.classList.toggle("expandBox")
});

const com = document.querySelector(".community");
p2NavClose[2].addEventListener("click", function(){
com.classList.toggle("expandBox")
});

const whn = document.querySelector(".whatsNew");
p2NavClose[3].addEventListener("click", function(){
whn.classList.toggle("expandBox")
});


// subMenu mini close btn
const p2Mini_closeBTN = document.querySelectorAll(".p2SubUp");
const miniSubUp = document.querySelectorAll(".p2miniSub");
p2Mini_closeBTN[0].addEventListener("click", function(){
miniSubUp[0].classList.toggle("p2MiniExpand");
miniSubUp[0].classList.toggle("p2MiniExpand_position");
p2arrowDown[0].classList.toggle("p2subIconR");
});
p2Mini_closeBTN[1].addEventListener("click", function(){
    miniSubUp[1].classList.toggle("p2MiniExpand");
    miniSubUp[1].classList.toggle("p2MiniExpand_position");
    p2arrowDown[1].classList.toggle("p2subIconR");
});
p2Mini_closeBTN[2].addEventListener("click", function(){
    miniSubUp[2].classList.toggle("p2MiniExpand");
    miniSubUp[2].classList.toggle("p2MiniExpand_position");
    p2arrowDown[2].classList.toggle("p2subIconR");
});
p2Mini_closeBTN[3].addEventListener("click", function(){
    miniSubUp[3].classList.toggle("p2MiniExpand");
    miniSubUp[3].classList.toggle("p2MiniExpand_position");
    p2arrowDown[3].classList.toggle("p2subIconR");
});

