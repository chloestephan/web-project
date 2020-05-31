$(window).scroll(function (event) {
    var windowTop = $(this).scrollTop();        
    if (windowTop >= $("#iframe").offset().top) {
        $("#top-button").addClass("fixed");
    } else {
        $("#top-button").removeClass("fixed");
    }
});