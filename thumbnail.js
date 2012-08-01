Crafty.c("Thumbnail", {
	init : function(){
		this.requires("2D, Canvas, Image");
	},
	
	Thumbnail : function(){
		return this;
	},
	
	updateThumbnail : function(d){
		console.log(d);
		this.image(d.thumbnail);
	}
})