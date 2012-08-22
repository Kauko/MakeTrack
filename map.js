Crafty.c("Map", {
	init: function() {
		this.requires("2D, Canvas, Image");
		this.z = -2;
	},
	Map: function(map) {
		this.image("/tracks/texture/" + map + ".png");
		this.numCheckpoints = map.checkpoints;
		return this;
	},
	
	getNumberOfCheckpoints : function(){
		return this.numCheckpoints;
	}
});
