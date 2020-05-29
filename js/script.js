/* Toggle between adding and removing the "responsive" class to top-navigation when the user clicks on the icon */
function responsive_top() {
    var x = document.getElementById("myTopnav");
    if (x.className === "top-navigation") {
        x.className += " responsive_top";
    } else {
        x.className = "top-navigation";
    }
}

function responsive_bottom() {
    var x = document.getElementById("myBotbar");
    if (x.className === "bottom-navigation") {
        x.className += " responsive_bottom";
    } else {
        x.className = "bottom-navigation";
    }
}

  $("#content a[href^='http://']").attr("target","_blank");

$(function(){
  var includes = $('[data-include]');
  jQuery.each(includes, function(){
    var file = $(this).data('include') + '.html';
    $(this).load(file);
  });
});