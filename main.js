AOS.init();
// Get the modal
var modal = document.getElementById("myModal");

// When the user clicks the button, open the modal
function openModal() {
    modal.style.display = "block";
    modal.style.opacity = '1';
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}