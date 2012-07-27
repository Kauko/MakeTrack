Crafty.c("TrackInfo", {
	init : function(){
		
	},
	
	TrackInfo : function(d){
		this.info = {
			entry1 : Crafty.e("SpriteFontWriter").SpriteFontWriter(230, 400),//.setContent(d.player1 + " : " + d.time1).writeText(),
			entry2 : Crafty.e("SpriteFontWriter").SpriteFontWriter(260, 400),//.setContent(d.player2 + " : " + d.time2).writeText(),
			entry3 : Crafty.e("SpriteFontWriter").SpriteFontWriter(290, 400),//.setContent(d.player3 + " : " + d.time3).writeText(),
			name : Crafty.e("SpriteFontWriter").SpriteFontWriter(30,400)//.setContent(d.name).writeText()
		};
		
		this.info.entry1.setContent(d.player1+ ":"+d.time1);
		this.info.entry1.writeText();
		
		this.info.entry2.setContent(d.player2+ ":"+d.time2);
		this.info.entry2.writeText();
		
		this.info.entry3.setContent(d.player3+ ":"+d.time3);
		this.info.entry3.writeText();
	
		this.info.name.setContent(d.name);
		this.info.name.writeText();
		
		return this;
	},
	
	updateTrackInfo : function(d){
		this.info = {
			entry1 : Crafty.e("SpriteFontWriter").SpriteFontWriter(230, 400).setContent(d.player1 + " : " + d.time1).writeText(),
			entry2 : Crafty.e("SpriteFontWriter").SpriteFontWriter(260, 400).setContent(d.player2 + " : " + d.time2).writeText(),
			entry3 : Crafty.e("SpriteFontWriter").SpriteFontWriter(290, 400).setContent(d.player3 + " : " + d.time3).writeText(),
			name : Crafty.e("SpriteFontWriter").SpriteFontWriter(30,400).setContent(d.name).writeText()
		};
		
		
		this.info.entry1.setContent(d.player1+ ":"+d.time1);
		this.info.entry1.writeText();
		
		this.info.entry2.setContent(d.player2+ ":"+d.time2);
		this.info.entry2.writeText();
		
		this.info.entry3.setContent(d.player3+ ":"+d.time3);
		this.info.entry3.writeText();
		
		this.info.name.setContent(d.name);
		this.info.name.writeText();
	}
})