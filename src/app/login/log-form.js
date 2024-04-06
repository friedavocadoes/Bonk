var modal = document.getElementById('modal-wrapper');
function opener () {
    document.getElementById('modal-wrapper').style.display='flex';
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}