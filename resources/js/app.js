require('./bootstrap');
var $ = require('jquery');



$(document).ready(function() {
    $('.fa-plus').click(function() {
        $(this).parent().next('.risposta').slideDown(200);
        $(this).hide();
        $(this).next().show();
    });

    $('.fa-minus').click(function() {
        $(this).parent().next('.risposta').slideUp(200);
        $(this).hide();
        $(this).prev().show();
    })
})
