import '../styles/main.scss';
import * as $ from 'jquery';

$("#btn-services").on('touchstart click', function() {
    $('html,body').animate({
        scrollTop: $("#services-section").offset().top},
        'slow');
});

$("#sh-services-btn").on('touchstart click',function() {
    $('html,body').animate({
        scrollTop: $("#services-section").offset().top},
        'slow');
});

$("#small-services-btn").on('touchstart click',function() {
    $('html,body').animate({
        scrollTop: $("#services-section").offset().top},
        'slow');
});

$("#mp-btn").on('touchstart click',function() {
    $('html,body').animate({
        scrollTop: $("#sm-section").offset().top},
        'slow');
});

$("#nails-btn").on('touchstart click',function() {
    $('html,body').animate({
        scrollTop: $("#nails-section").offset().top},
        'slow');
});

$("#find-us-btn, #btn-find-us, #btn-phonenumber,  #book-appt-sm-btn, #book-appt-med-btn, #book-appt-lrg-btn, #ask-questions-btn").on('touchstart click',function() {
    $('html,body').animate({
        scrollTop: $("#call-us-btn").offset().top},
        'slow');
});
