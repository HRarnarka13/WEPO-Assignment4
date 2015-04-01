window.Pipe = (function() {
    'use strict';

    var GAPHEIGHT = 15;

    var Pipe = function(topHeight, id, game) {
    	this.topHeight = topHeight;
    	this.id = id;
    	this.game = game;
    	this.top = { x: 102.4, y: topHeight };
    	var gap = 40 - (topHeight + GAPHEIGHT);
    	this.bottom = { x:102.4, y: gap };


    	// Create a top an bottom pipe
    	var top = "<div style='height: " + this.top.y + "em' class='Toppipe'></div>"
    	var bot = "<div style='margin-top: " + this.bottom.y + "em; height: " + 100 + "em' class='Bottompipe'></div>"

    	// Append the pipes to the list of pipes
    	$('#'+ this.id).append(top);
    	$('#'+ this.id).append(bot);
	};

	Pipe.prototype.onFrame = function(delta) {

		if (this.top.x < -20) {
			this.deletePipe(this.id); // delete the pipe if it has passed by
		} else if ( this.top.x <= 42) {
			$('.score').text(this.id); // update the score
		}
		this.top.x -= 0.4;

		//Update UI
		$('#'+ this.id).css('transform', 'translate3d(' + this.top.x + 'em, 0em, 0em)');
	};

	Pipe.prototype.checkCollision = function(player) {

	};

	Pipe.prototype.deletePipe = function (id) {
    	$('#' + id).remove();
    };

	Pipe.prototype.method_name = function(first_argument) {
		// body...
	};

	return Pipe;

})();