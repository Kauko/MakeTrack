Crafty.c("Thumbnail", {
	init : function(){
		this.requires("2D, Canvas, Image");
	},
	
	Thumbnail : function(){
		return this;
	},
	
	updateThumbnail : function(d){
		this.image("/tracks/thumb/" + d.handle + ".png");
	}
})