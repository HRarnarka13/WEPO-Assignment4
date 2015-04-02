/**
 * Bootstrap and start the game.
 */
$(function() {
    'use strict';

    var game = new window.Game($('.GameCanvas'));

    var fontSize = Math.min(window.innerWidth / 102.4, window.innerHeight / 57.6);
    if (fontSize < 10) {
    	$('.GameCanvas').css('fontSize', fontSize + 'px');
	}
    $('.GameCanvas').css('background-position-y', 52 - (fontSize/10) + 'em');
    game.start();


});
