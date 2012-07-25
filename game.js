window.onload = function() {

	Crafty.init(640, 480);
	Crafty.canvas.init();
	
	Crafty.sprite(10,30, "http://placehold.it/50/50",{ 
		car_player : [0,0] 
	});
	
	Crafty.scene("loading_game");
};

var trackIndex = 0;

Crafty.scene("loading_game", function() {
	load = ["http://kauko.pingtimeout.net/track.png","http://kauko.pingtimeout.net/track_data.png"];
	Crafty.load(load, function(){
		//Crafty.scene("choose_track");
		Crafty.scene("play");
	});
});

Crafty.scene("choose_track", function() {
	//selector = Crafty.e("Selector").Selector();
	menu = Crafty.e("TrackMenu, Selector").TrackMenu();
});

Crafty.scene("loading_track") function() {
	load = ["derp"];
	Crafty.load(load,function(){
		Crafty.scene("play");
	}
});
	
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