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