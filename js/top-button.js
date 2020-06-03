<<<<<<< HEAD
/* --- allows the page to go back to the top when clicks on the top button --- */

// gets which button to apply the following functions
var button = document.getElementById("top-button");

// When the user scrolls down 20px from the top of the document, display the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// When the user clicks on the button, scroll back to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* --- make the button stop just before footer ---*/
$(window).scroll(function() {
  var windowTop = $(this).scrollTop();        
  if (windowTop >= $("#footer").offset().top) {
    document.getElementById('top-button').style.position = "fixed";
  } else {
    document.getElementById("top-button").style.position = "absolute";
  }
});

//laisser en fixed mais plus haut (scroll de 1 px -> remonte de 1px)


=======
$(window).scroll(function (event) {
    var windowTop = $(this).scrollTop();        
    if (windowTop >= $("#iframe").offset().top) {
        $("#top-button").addClass("fixed");
    } else {
        $("#top-button").removeClass("fixed");
    }
});
>>>>>>> master
