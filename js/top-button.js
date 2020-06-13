/* --- allows the page to go back to the top when clicks on the top button --- */

// @description gets which button to apply the following functions
var button = document.getElementById("top-button");

// @description when the user scrolls down 20px from the top of the document, display the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// @description when the user clicks on the button, scroll back to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
