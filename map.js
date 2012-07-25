
var MapList = 
[
	{
		bg: "http://kauko.pingtimeout.net/track.png",
		data: "http://kauko.pingtimeout.net/track.png"
	}
]

Crafty.c("Map", {
	init: function() {
		this.requires("2D, Canvas, Image")
		this.z = -2;
	},
	Map: function(map) {
		this.image(map.bg);
		return this;
	}
});
