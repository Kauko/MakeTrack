Crafty.c("Map", {
	init: function() {
		this.requires("2D, Canvas, Image");
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
