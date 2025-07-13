// miniSlider btns````````````````````````````````````````````````````````
const NextMini = document.querySelector(".p3miniR");
const BackMini = document.querySelector(".p3miniL");

function nextImageMini() {
    let screenWidth = document.documentElement.clientWidth;
    let firstElement = document.querySelector(".p3part3LinkMini");
    let firstImage = document.querySelector(".p3part3LinkMini img");
    firstElement.style.marginLeft = `-${screenWidth}px`;
    setTimeout(function () {
        let firstImageSource = firstImage.getAttribute("src");
        firstElement.remove();
        let lastElement = document.createElement("a");
        lastElement.classList.add("p3mainSliderBox");
        lastElement.setAttribute("href", "#");
        lastElement.classList.add("p3part3LinkMini");
        let lastImage = document.createElement("img");
        lastImage.setAttribute("src", firstImageSource);
        lastElement.appendChild(lastImage);
        // Next.before(lastElement);
        document.querySelectorAll(".p3mainSliderBoxMini")[1].appendChild(lastElement);
    }, 500)
}
function previousImageMini() {
    let screenWidth = document.documentElement.clientWidth;
    let lastElement = document.querySelectorAll(".p3part3LinkMini")[document.querySelectorAll(".p3part3LinkMini").length - 1];
    let lastImage = lastElement.lastChild;
    let lastImageSource = lastImage.getAttribute("src");
    lastElement.remove();
    let firstElement = document.createElement("a");
    firstElement.setAttribute("href", "#");
    firstElement.classList.add("p3part3LinkMini");
    let firstImage = document.createElement("img");
    firstImage.setAttribute("src", lastImageSource);
    firstElement.appendChild(firstImage);
    firstElement.style.marginLeft = `-${screenWidth}px`;
    document.querySelectorAll(".p3mainSliderBox")[1].prepend(firstElement);
    setTimeout(function () {
        firstElement.style.marginLeft = 0;
    }, 1);
}

NextMini.addEventListener("click", function () {
    nextImageMini();
});

BackMini.addEventListener("click", function () {
    previousImageMini();
});

// -----------------------------------------------for both parts:
let key1 = setInterval(nextImageMini, 2000);

document.querySelectorAll(".part3")[1].addEventListener("mouseover", function () {
    clearInterval(key1);
});

document.querySelectorAll(".part3")[1].addEventListener("mouseout", function () {
    key1 = setInterval(nextImage, 2000);
});