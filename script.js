document.addEventListener("DOMContentLoaded", function () {
    // Simulate page load by adding the 'loaded' class after a delay
    setTimeout(function () {
        document.body.classList.add("loaded");
    }, 5000);
});

document.getElementById('displayMsg').style.display = 'block';

function toAdmin() {
   window.location.href = "admin.html";

}

