Crafty.c("TrackListEntry", {
	
	init : function(){
	},
	
	TrackListEntry : function(t){
		/*this.thumbnail = t.thumbnail;
		this.time1 = t.time1;
		this.time2 = t.time2;
		this.time3 = t.time3;
		this.player1 = t.player1;
		this.player2 = t.player2;
		this.player3 = t.player3;*/
		this.id = t.id;
		this.name = t.name;
		return this;
	},
	
	getTrackName : function(){
		return this.name;
	},
	
	getTrackId : function(){
		return this.id;
	}
})