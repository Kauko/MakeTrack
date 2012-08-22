window.onload = function() {

	Crafty.init(1280, 720);
	Crafty.canvas.init();
	
	Crafty.sprite(20, 47, "/sprites/formula_05_blue_small.png",{ 
		car_player : [0,0] 
	});
	Crafty.scene("loading_game");
};

var selectedTrack = ""; //handle of track
var trackData = {};
var trackList = [];
var racetime = 0;
var starttime = 0;

updatePreview = function(response){
	console.log(response);
	preview.updateThumbnail(response);
	preview.updateTrackInfo(response);
}

playTrack = function(response) {
	trackData = response; 
	Crafty.scene("loading_track"); 
}

showRecordForm = function(response) {
	document.getElementById("recordform").innerHTML = response;
	var millis = document.getElementById("seconds").innerHTML;
	var time = new Date(parseInt(millis));

	var ms = time.getMilliseconds();

	if(ms.length == 2)
		ms = "0"+ms;
	else if(ms.length == 1)
		ms = "00"+ms;
	var string = time.getSeconds()+"s "+ms+"ms";
	document.getElementById("seconds").innerHTML = string;
}	

submitRecord = function() {
	trackid = document.getElementById("trackid").value; 
	record = document.getElementById("record").value; 
	player = document.getElementById("name").value; 
	saveTrackRecord(trackid, player, record); 
}

returnToMenu = function() {
	Crafty.scene("choose_track"); 
}	
		

Crafty.scene("loading_game", function() {
	background = Crafty.e("2D, Canvas, Image").image("/sprites/loading_01.png");
	Crafty.background("/sprites/loading_01.png");
	load = ["/sprites/formula_05_blue_small.png","/sprites/loading_01.png", "/sprites/menu_01.png"];
	Crafty.load(load, function(){
		Crafty.scene("choose_track");
	});
});

Crafty.scene("choose_track", function() {
	background = Crafty.e("2D, Canvas, Image").image("/sprites/menu_01.png");
	trackMenu = Crafty.e("Selector, TrackList").TrackList().Selector();
	preview = Crafty.e("Thumbnail, TrackInfo")
		.TrackInfo()
		.attr({x: 900, y:80})
		.bind("SelectorMoved", function(e){
			trackMenu.getTrackPreviewData(e.index);
		})
		.bind("TrackSelected",function(e){
			selectedTrack = trackMenu.getId(trackMenu.getSelectorIndex());
			Crafty.scene("fetching_track");	
		});
		
	//trackMenu.getTrackPreviewData(trackMenu.getSelectorIndex());
});

Crafty.scene("fetching_track", function(){
	background = Crafty.e("2D, Canvas, Image").image("/sprites/loading_01.png");
	requestTrackData(selectedTrack);
	trackMenu.destroy();
	preview.destroy();
});

Crafty.scene("loading_track", function() {
	background = Crafty.e("2D, Canvas, Image").image("/sprites/loading_01.png");
	load = ["/tracks/texture/" + trackData.handle + ".png", "/tracks/mapdata/" + trackData.handle + ".png"];
	Crafty.load(load,function(){
		Crafty.scene("play");
	});
});
	
Crafty.scene("play", function() {
	starttime = 0; //reset the start timer
	var prevTime = -2000;
	CurrentMap = trackData;
	mapdata = Crafty.e("MapData").MapData("/tracks/mapdata/" + CurrentMap.handle + ".png");
	texture = Crafty.e("Map").Map(CurrentMap);
	stopwatch = Crafty.e("SpriteFontWriter").SpriteFontWriter(5,15)
		.bind("EnterFrame", function(e){
			if(starttime != 0){ //player hasnt pressed W yet
				racetime = e.frame * 20;
				racetime -= starttime;
				var time = new Date(racetime);
				if(time - prevTime > 100){
					this.eraseText();
					var ms = time.getMilliseconds();
					if(ms.length == 2)
						ms = "0"+ms;
					else if(ms.length == 1)
						ms = "00"+ms;
					this.setContent(time.getSeconds() + " " + time.getMilliseconds());
					this.writeText();
					prevTime = time;
				}
			}
			
		});
	car = Crafty.e("2D, Canvas, car_player, Car, Keyboard")
		.origin("center")
		.attr({x: CurrentMap.init_x, y: CurrentMap.init_y})
		.Car(CurrentMap.init_dir);
});
	
Crafty.scene("race_over", function() {
	stopwatch.destroy();
	background = Crafty.e("2D, Canvas, Image").image("/sprites/menu_01.png");
	mapdata.destroy();
	texture.destroy();
	car.destroy();
	requestRecordForm(selectedTrack, racetime);
});