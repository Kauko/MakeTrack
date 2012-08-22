Crafty.c("TrackInfo", {
	init : function(){
		
	},
	
	TrackInfo : function(){
	
		this.info = {
			entry1 : Crafty.e("SpriteFontWriter").SpriteFontWriter(900, 230),
			entry2 : Crafty.e("SpriteFontWriter").SpriteFontWriter(900, 260),
			entry3 : Crafty.e("SpriteFontWriter").SpriteFontWriter(900, 290),
			name : Crafty.e("SpriteFontWriter").SpriteFontWriter(900,30)
		};
		/*this.info = {
			entry1 : Crafty.e("SpriteFontWriter").SpriteFontWriter(400, 230),//.setContent(d.player1 + " : " + d.time1).writeText(),
			entry2 : Crafty.e("SpriteFontWriter").SpriteFontWriter(400, 260),//.setContent(d.player2 + " : " + d.time2).writeText(),
			entry3 : Crafty.e("SpriteFontWriter").SpriteFontWriter(400, 290),//.setContent(d.player3 + " : " + d.time3).writeText(),
			name : Crafty.e("SpriteFontWriter").SpriteFontWriter(400,30)//.setContent(d.name).writeText()
		};
		
		this.info.entry1.setContent(d.records[0].name + ":" + d.records[0].time);
		this.info.entry1.writeText();
		
		this.info.entry2.setContent(d.records[1].name + ":" + d.records[1].time);
		this.info.entry2.writeText();
		
		this.info.entry3.setContent(d.records[2].name + ":" + d.records[2].time);
		this.info.entry3.writeText();
	
		this.info.name.setContent(d.name);
		this.info.name.writeText();*/
		
		return this;
	},
	
	updateTrackInfo : function(d){
		var time = 0;
		var string = "";
		
		if (d.records.length > 0) {
			time = new Date(d.records[0][1]);
			string = time.getSeconds()+"s "+time.getMilliseconds()+"ms";
			this.info.entry1.setContent(d.records[0][0] + "   " + string);
		}
		else {
			this.info.entry1.setContent(" ")
		}
		this.info.entry1.eraseText();
		this.info.entry1.writeText();
		
		if (d.records.length > 1) {
			time = new Date(d.records[0][1]);
			string = time.getSeconds()+"s "+time.getMilliseconds()+"ms";
			this.info.entry2.setContent(d.records[1][0] + "   " + string);
		}
		else {
			this.info.entry2.setContent(" ")
		}		
		this.info.entry2.eraseText();
		this.info.entry2.writeText();
		
		if (d.records.length > 2) {
			time = new Date(d.records[0][1]);
			string = time.getSeconds()+"s "+time.getMilliseconds()+"ms";
			this.info.entry3.setContent(d.records[2][0] + "   " + string);
		}
		else {
			this.info.entry3.setContent(" ")
		}		
		this.info.entry3.eraseText();
		this.info.entry3.writeText();
	
		this.info.name.setContent(d.name);
		this.info.name.eraseText();
		this.info.name.writeText();
	}
})