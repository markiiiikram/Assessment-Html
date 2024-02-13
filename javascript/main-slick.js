$(document).ready(function() {
    // Header Banner Slider using Slick
    $('.container-banner').slick({
        autoplay: true,
        dots: true,
        adaptiveHeight: true,
       
        nextArrow: false,
        prevArrow: false,
    });
    
    // // Partner Banner Slider using Slick
    // $('.carousell-partners-content').slick({
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     variableWidth: true,
    //     prevArrow: false,
    //     nextArrow: false,
    //     draggable: false,
    //     swipe: false
    // });
    
    // // Client Banner Slider using Slick
    // $('.carousell-clients-content').slick({
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     variableWidth: true,
    //     prevArrow: false,
    //     nextArrow: false,
    //     draggable: false,
    //     swipe: false,
    // });

    $('.affiliation-banner').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        infinite: true,
        variableWidth: true,
        prevArrow: false,
        nextArrow: false,
        draggable: false,
        swipe: false,
      });
});

