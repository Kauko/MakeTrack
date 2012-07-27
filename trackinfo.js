Crafty.c("TrackInfo", function(){
	this.info = {};
	init : function(){
		
	},
	
	TrackInfo : function(d){
		this.info = {
			entry1 : Crafty.e("SpriteFontWriter").SpriteFontWriter(230, 400).setContent(d.player1 + " : " + d.time1).writeText(),
			entry2 : Crafty.e("SpriteFontWriter").SpriteFontWriter(260, 400).setContent(d.player2 + " : " + d.time2).writeText(),
			entry3 : Crafty.e("SpriteFontWriter").SpriteFontWriter(290, 400).setContent(d.player3 + " : " + d.time3).writeText(),
			name : Crafty.e("SpriteFontWriter").SpriteFontWriter(30,400).setContent(d.name).writeText()
		};
		return this;
	},
	
	updateTrackInfo : function(d){
		this.info = {
			entry1 : Crafty.e("SpriteFontWriter").SpriteFontWriter(230, 400).setContent(d.player1 + " : " + d.time1).writeText(),
			entry2 : Crafty.e("SpriteFontWriter").SpriteFontWriter(260, 400).setContent(d.player2 + " : " + d.time2).writeText(),
			entry3 : Crafty.e("SpriteFontWriter").SpriteFontWriter(290, 400).setContent(d.player3 + " : " + d.time3).writeText(),
			name : Crafty.e("SpriteFontWriter").SpriteFontWriter(30,400).setContent(d.name).writeText()
		};
	}
})