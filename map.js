
var MapList = 
[
	{
		bg: "http://kauko.pingtimeout.net/track_data.png",
		data: "http://kauko.pingtimeout.net/track_data.png",
		checkpoints: 3
	}
]

var TrackDataList =
[
	{
		thumbnail : "http://kauko.pingtimeout.net/track_thumb.png",
		time1 : "00:12:72",
		time2 : "00:16:08",
		time3 : "01:26:00",
		player1 : "blondis",
		player2 : "hank",
		player3 : "ari",
		name : "tulikaste"
	}
]

Crafty.c("Map", {
	init: function() {
		this.requires("2D, Canvas, Image")
		this.z = -2;
	},
	Map: function(map) {
		this.image(map.bg);
		this.numCheckpoints = map.checkpoints;
		return this;
	},
	
	getNumberOfCheckpoints : function(){
		return this.numCheckpoints;
	}
});
