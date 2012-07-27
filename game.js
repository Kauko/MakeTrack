window.onload = function() {

	Crafty.init(640, 480);
	Crafty.canvas.init();
	
	Crafty.sprite(10,30, "http://placehold.it/50/50",{ 
		car_player : [0,0] 
	});
	
	Crafty.scene("loading_game");
};

var selectedTrack = ""; //name of track

Crafty.scene("loading_game", function() {
	load = ["http://kauko.pingtimeout.net/track.png","http://kauko.pingtimeout.net/track_data.png"];
	Crafty.load(load, function(){
		Crafty.scene("choose_track");
	});
});

Crafty.scene("choose_track", function() {
	Crafty.background("rgb(0,0,0)");
	trackMenu = Crafty.e("Selector, TrackList").Selector(0).TrackList();
	var data = trackMenu.getTrackInfo(trackMenu.getSelectorIndex());
	preview = Crafty.e("Thumbnail, TrackInfo")
		.attr({x: 400, y:130})
		.Thumbnail(data)
		.TrackInfo(data)
		.bind("SelectorMoved", function(e){
			var data = trackMenu.getTrackInfo(e.index);
			this.updateThumbnail(data);
			this.updateTrackInfo(data);
		});
});

Crafty.scene("loading_track", function() {
	//Use selectedTrack (name of selected track)
	load = [];
	Crafty.load(load,function(){
		Crafty.scene("play");
	});
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
	
Crafty.scene("race_over", function() {

});