window.Ground = (function() {
    'use strict';

    var Ground = function(el, game) {
    	this.el = el;
    	this.game = game;
    	this.sealvl = 7.6;
    	this.x = 0;
	};

	Ground.prototype.onFrame = function(delta) {

		if (this.x < -102.4){
			this.x = 0;
		}
		//this.x -= 5.64;
		this.x -= 1.64;
		//this.el.css('background-position', this.x + 'px 0');
		console.log(this.x);
		this.el.css('transform', 'translate(' + this.x + 'em)');
	};

	return Ground;

})();