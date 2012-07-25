window.onload = function() {

	Crafty.init(640, 480);
	Crafty.canvas.init();
	
	Crafty.sprite(10,30, "http://placehold.it/50/50",{ 
		car_player : [0,0] 
	});
	
	Crafty.scene("loading_game");
};

Crafty.scene("loading_game", function() {
	load = ["http://kauko.pingtimeout.net/track.png"];
	Crafty.load(load, function(){
		Crafty.scene("play");
	});
});

Crafty.scene("choose_track", function() {});
	
Crafty.scene("play", function() {
	CurrentMap = MapList[0];
	mapdata = Crafty.e("MapData").MapData(CurrentMap.data);
	texture = Crafty.e("Map").Map(CurrentMap);		
	car = Crafty.e("2D, Canvas, car_player, Car, Keyboard")
		.origin("center")
		.attr({x: 100, y: 100})
		.Car();
});
	
Crafty.scene("race_over", function() {});