AOS.init();
// Get the modal
const modal = document.getElementById("myModal");
const openModal = document.getElementById("openModal");

// When the user clicks the button, open the modal
openModal.onclick = function () {
  this.innerHTML = '<div class="loading"></div>';
  setTimeout(() => {
    this.innerHTML = 'View Activities'
    modal.style.display = "block";
    modal.style.opacity = "1";
  }, 1500);
};

// When the user clicks on <span> (x), close the modal
function closeModal() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
