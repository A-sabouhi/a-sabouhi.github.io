"strict use"
const Cards = document.querySelectorAll(".mainbox");
const Pages = document.querySelectorAll(".card");


/*function resetTheCard() {
    Pages[0].classList.remove("flipcard");
    Pages[1].classList.remove("flipcard");
    Pages[2].classList.remove("flipcard");
    Pages[3].classList.remove("flipcard");
};
*/

Cards[0].addEventListener("click", function () {
    // resetTheCard();
    Pages[1].classList.remove("flipcard");
    Pages[2].classList.remove("flipcard");
    Pages[3].classList.remove("flipcard");
    Pages[0].classList.toggle("flipcard");
});
Cards[1].addEventListener("click", function () {
    // resetTheCard();
    Pages[0].classList.remove("flipcard");
    Pages[2].classList.remove("flipcard");
    Pages[3].classList.remove("flipcard");
    Pages[1].classList.toggle("flipcard");
});
Cards[2].addEventListener("click", function () {
    // resetTheCard();
    Pages[0].classList.remove("flipcard");
    Pages[1].classList.remove("flipcard");
    Pages[3].classList.remove("flipcard");
    Pages[2].classList.toggle("flipcard");
});
Cards[3].addEventListener("click", function () {
    // resetTheCard();
    Pages[0].classList.remove("flipcard");
    Pages[1].classList.remove("flipcard");
    Pages[2].classList.remove("flipcard");
    Pages[3].classList.toggle("flipcard");
});

// btn of info on paintings
const textBTN = document.querySelectorAll(".imgTextBTN");
const infoBox = document.querySelectorAll(".img_text_sm_p");

// textBTN[0].addEventListener("click", function(){
//     infoBox[0].classList.toggle("img_text_sm_pScale");
//     infoBox[0].classList.toggle("img_text_sm_pScale_dNone");
   
// })

// -----------------------------------
// textBTN[0].addEventListener("click", function () {
//     const box = infoBox[0];
//     const isExpanded = box.classList.contains("img_text_sm_pScale");

//     if (isExpanded) {
//         box.classList.remove("img_text_sm_pScale");
//         box.classList.remove("img_text_sm_pScale_dNone");
//     } else {
//         box.classList.add("img_text_sm_pScale");

//         box.addEventListener("transitionend", function handler(e) {
//             if (e.propertyName === "transform") {
//                 box.classList.add("img_text_sm_pScale_dNone");
//                 box.removeEventListener("transitionend", handler);
//             }
//         });
//     }
// });
// ------------------------------------

// =============================================
// for (let i = 0; i < textBTN.length; i++) {
//     textBTN[i].addEventListener("click", function () {
//         const box = infoBox[i];
//         const isExpanded = box.classList.contains("img_text_sm_pScale");

//         if (isExpanded) {
//             box.classList.remove("img_text_sm_pScale");
//             box.classList.remove("img_text_sm_pScale_dNone");
//         } else {
//             box.classList.add("img_text_sm_pScale");

//             box.addEventListener("transitionend", function handler(e) {
//                 if (e.propertyName === "transform") {
//                     box.classList.add("img_text_sm_pScale_dNone");
//                 }
//             }, { once: true });
//         }
//     });
// }
// ==============================================
for (let i = 0; i < textBTN.length; i++) {
  textBTN[i].addEventListener("click", function () {
    const box = infoBox[i];
    const isExpanded = box.style.display !== "none" && !box.classList.contains("img_text_sm_pScale_dNone");

    if (isExpanded) {
      // COLLAPSE
      box.style.transform = "scaleY(0)";
      box.addEventListener("transitionend", function handler(e) {
        if (e.propertyName === "transform") {
          box.classList.add("img_text_sm_pScale_dNone");
          box.style.display = "none";
          box.removeEventListener("transitionend", handler);
        }
      }, { once: true });
    } else {
      // EXPAND
      box.style.display = "block";
      box.classList.remove("img_text_sm_pScale_dNone");

      // Step 1: Set starting transform
      box.style.transform = "scaleY(0)";

      // Step 2: Force reflow
      void box.offsetHeight;

      // Step 3: Animate to full size
      box.style.transform = "scaleY(1)";
    }
  });
}