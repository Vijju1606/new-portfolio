// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
    hamburger.classList.toggle('active');
});

  
  
  
  
  
// Get the button
let goTopBtn = document.getElementById("goTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        goTopBtn.style.display = "block";
    } else {
        goTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
goTopBtn.addEventListener('click', function(event) {
    event.preventDefault();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
