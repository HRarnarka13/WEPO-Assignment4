window.Ground = (function() {
    'use strict';

    var Ground = function(el, game) {
    	this.el = el;
    	this.game = game;
    	this.sealvl = 7.6;
    	this.x = 0;
	};

	Ground.prototype.onFrame = function(delta) {

		if (this.x < -1000){
			this.x = 0;
		}
		this.x -= + 5.64;
		this.el.css('background-position', this.x + 'px 0');
	};

	return Ground;

})();