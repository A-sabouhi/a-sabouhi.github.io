
const p1Close = document.querySelector(".p1closeCross");
const p1LocalBar = document.querySelector(".p1main");
const p1BGBox = document.querySelector(".p1localBG");
const p2upSlow = document.querySelector(".part2")


p1Close.addEventListener("click", function () {
    p1LocalBar.classList.add("p1Close");
    setTimeout(function () {
        p1BGBox.classList.add("p1CloseBG");
    }, 350);
    setTimeout(function () {
        p1LocalBar.classList.add("p1moveup");
    }, 1000);
    setTimeout(function(){
        p2upSlow.classList.add("p2MarginUp");
        p2upSlow.classList.add("p2MoveUp");
    },1000) ;
    
})
