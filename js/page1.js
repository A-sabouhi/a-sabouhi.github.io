const openModal = document.getElementById("openModal");
const adobePhotoshop_btn = document.getElementById("AdobePhotoshop_btn");
const adobeIllustrator_btn = document.getElementById("AdobeIllustrator_btn");
const close_btn = document.getElementById("closeBtn");
const modal = document.getElementById("customModal");
const modalBox = modal.querySelector(".modal-box");

// Open modal
openModal.addEventListener("click", function () {
  modal.classList.add("active");
});
adobePhotoshop_btn.addEventListener("click", function () {
  modal.classList.add("active");
});
adobeIllustrator_btn.addEventListener("click", function () {
  modal.classList.add("active");
});
close_btn.addEventListener("click", function () {
  modal.classList.remove("active");
});

// Close modal on outside click
modal.addEventListener("click", function (e) {
  if (!modalBox.contains(e.target)) {
    modal.classList.remove("active");
  }
});