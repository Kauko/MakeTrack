Crafty.c("Thumbnail" function() {
	init : function(){
		this.requires("2D, Canvas, Image");
	},
	
	Thumbnail : function(d){
		this.image(d.thumbnail);
		return this;
	},
	
	updateThumbnail : function(d){
		this.image(d.thumbnail);
	}
})