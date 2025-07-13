// let current = 0,
//     slides = document.querySelectorAll("img");

// setInterval(function () {
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.opacity = 0;
//     }
//     current = (current != slides.length - 1) ? current + 1 : 0;
//     slides[current].style.opacity = 1;
// }, 3000);


const Next = document.querySelector(".p3next");
const Back = document.querySelector(".p3back");



function nextImage() {
    let screenWidth = document.documentElement.clientWidth;
    let firstElement = document.querySelector(".p3part3Link");
    let firstImage = document.querySelector(".p3part3Link img");
    firstElement.style.marginLeft = `-${screenWidth}px`;
    setTimeout(function () {
        let firstImageSource = firstImage.getAttribute("src");
        firstElement.remove();
        let lastElement = document.createElement("a");
        lastElement.classList.add("p3mainSliderBox");
        lastElement.setAttribute("href", "#");
        lastElement.classList.add("p3part3Link");
        let lastImage = document.createElement("img");
        lastImage.setAttribute("src", firstImageSource);
        lastElement.appendChild(lastImage);
        // Next.before(lastElement);
        document.querySelectorAll(".p3mainSliderBox")[1].appendChild(lastElement);
    }, 500)
}
function previousImage() {
    let screenWidth = document.documentElement.clientWidth;
    let lastElement = document.querySelectorAll(".p3part3Link")[document.querySelectorAll(".p3part3Link").length - 1];
    let lastImage = lastElement.lastChild;
    let lastImageSource = lastImage.getAttribute("src");
    lastElement.remove();
    let firstElement = document.createElement("a");
    firstElement.setAttribute("href", "#");
    firstElement.classList.add("p3part3Link");
    let firstImage = document.createElement("img");
    firstImage.setAttribute("src", lastImageSource);
    firstElement.appendChild(firstImage);
    firstElement.style.marginLeft = `-${screenWidth}px`;
    document.querySelectorAll(".p3mainSliderBox")[1].prepend(firstElement);
    setTimeout(function () {
        firstElement.style.marginLeft = 0;
    }, 1);
}

Next.addEventListener("click", function () {
    nextImage();
});

Back.addEventListener("click", function () {
    previousImage();
});

let key = setInterval(nextImage, 3000);

document.querySelectorAll(".part3")[1].addEventListener("mouseover", function () {
    clearInterval(key);
});

document.querySelectorAll(".part3")[1].addEventListener("mouseout", function () {
    key = setInterval(nextImage, 3000);
});

// slidermini

const Nextmini = document.querySelector(".next");
const Backmini = document.querySelector(".back");

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
        document.querySelectorAll(".p3mainSliderBox")[0].appendChild(lastElement);
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
    document.querySelectorAll(".p3mainSliderBox")[0].prepend(firstElement);
    setTimeout(function () {
        firstElement.style.marginLeft = 0;
    }, 1);
}

Nextmini.addEventListener("click", function () {
    nextImageMini();
});

Backmini.addEventListener("click", function () {
    previousImageMini();
});

let keyMini = setInterval(nextImageMini, 3000);

document.querySelectorAll(".part3")[0].addEventListener("mouseover", function () {
    clearInterval(keyMini);
});

document.querySelectorAll(".part3")[0].addEventListener("mouseout", function () {
    keyMini = setInterval(nextImageMini, 3000);
});