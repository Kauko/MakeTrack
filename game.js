window.onload = function() {

	Crafty.init(640, 480);
	Crafty.canvas.init();
	
	Crafty.sprite(10,30, "http://placehold.it/50/50",{ 
		car_player : [0,0] 
	});
		
	car = Crafty.e("2D, Canvas, car_player, Car, Keyboard")
	.origin("center")
	.attr({x: 100, y: 100})
	.Car();
	
};