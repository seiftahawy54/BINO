/*global $*/

$(function () {

    'use strict';

    // Scrolling Nav Bar Opacity

    var myWindow = $(window),
        myNavBar = $("nav");

    $(window).scroll(function () {

        if (myWindow.scrollTop() >= myNavBar.height() && !myWindow.hasClass('scrolled')) {
            myNavBar.addClass("scrolled");
        } else {
            myNavBar.removeClass("scrolled");
        }

    });

    // Anchore Go Down

    $(".anchor-shape").on('click', function () {
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        }, 900);
    })

    // Go Up Button

    $(".go_up").on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 6000);
    });

    // Active Navigation Bar

    $('nav .collapse ul li').on('click', function () {
        
        $("html, body").animate({
            
            scrollTop: $("#" + $(this).data('section')).offset().top
            
        }, 1200);
    });

    // Add Active Class
    
    $('nav .collapse ul li a').on('click', function () {
        
        $(this).parent().addClass('active').siblings().removeClass('active');
        
    });

});