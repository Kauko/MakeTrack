window.onload = function() {

	Crafty.init(640, 480);
	Crafty.canvas.init();
	
	Crafty.sprite(10,30, "http://placehold.it/50/50",{ 
		car_player : [0,0] 
	});
	
	Crafty.scene("loading_game");
};

var selectedTrack = ""; //handle of track
var trackData = {};
var trackList = [];

updatePreview = function(response){
	preview.updateThumbnail(response);
	preview.updateTrackInfo(response);
}

playTrack = function(response) {
	console.log(response);
	trackData = response; 
	Crafty.scene("loading_track"); 
}

Crafty.scene("loading_game", function() {
	//Something like backgrounds, menu sounds..?
	load = ["http://kauko.pingtimeout.net/track.png","http://kauko.pingtimeout.net/track_data.png"];
	Crafty.load(load, function(){
		Crafty.scene("choose_track");
	});
});

Crafty.scene("choose_track", function() {
	Crafty.background("rgb(0,0,0)");
	trackMenu = Crafty.e("Selector, TrackList").TrackList().Selector();
	preview = Crafty.e("Thumbnail, TrackInfo")
		.attr({x: 400, y:130})
		.bind("SelectorMoved", function(e){
			trackMenu.getTrackPreviewData(e.index);
		})
		.bind("TrackSelected",function(e){
			console.log("track selected!");
			selectedTrack = trackMenu.getId(trackMenu.getSelectorIndex());
			console.log(selectedTrack);
			Crafty.scene("fetching_track");	
		});
		
	trackMenu.getTrackPreviewData(trackMenu.getSelectorIndex());
});

Crafty.scene("fetching_track", function(){
	console.log("fetching");
	requestTrackData(playTrack, selectedTrack);
	trackMenu.destroy();
	preview.destroy();
});

Crafty.scene("loading_track", function() {
	console.log("loading");
	load = [trackData.bg, trackData.data];
	console.log(load);
	Crafty.load(load,function(){
		Crafty.scene("play");
	});
});
	
Crafty.scene("play", function() {
	console.log("play");
	CurrentMap = trackData;
	mapdata = Crafty.e("MapData").MapData(CurrentMap.data);
	texture = Crafty.e("Map").Map(CurrentMap);		
	car = Crafty.e("2D, Canvas, car_player, Car, Keyboard")
		.origin("center")
		.attr({x: 100, y: 100})
		.Car();
});
	
Crafty.scene("race_over", function() {

});