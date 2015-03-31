window.Pipe = (function() {
    'use strict';

    var Pipe = function(el, game) {
    	this.el = el;
    	this.game = game;
    	this.top = { x: 102.4, y: 21.6 };
    	this.bottom = { x:102.4, y: 43.2 };
	};

	Pipe.prototype.onFrame = function(delta) {

		if (this.x < 0) {
			this.x = 100;
		}
		this.top.x -= 0.4;

		// console.log(this.top.x);
		this.el.css('transform', 'translate3d(' + this.top.x + 'em, 0em, 0em)');
	};

	Pipe.prototype.generatePipes = function(first_argument) {

	};

	Pipe.prototype.method_name = function(first_argument) {
		// body...
	};

	return Pipe;

})();