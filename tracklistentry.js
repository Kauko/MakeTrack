Crafty.c("TrackListEntry", function(){
	this.thumbnail = "http://placehold.it/64/48";
	this.time1 = 99:99:99;
	this.time2 = 99:99:99;
	this.time3 = 99:99:99;
	this.player1 = "Hank";
	this.player2 = "Hank";
	this.player3 = "Hank";
	this.name = "Placeholder";
	init : function(){
	},
	
	TrackListEntry : function(t){
		this.thumbnail = t.thumbnail;
		this.time1 = t.time1;
		this.time2 = t.time2;
		this.time3 = t.time3;
		this.player1 = t.player1;
		this.player2 = t.player2;
		this.player3 = t.player3;
		this.name = t.name;
	},
	
	getTrackName : function(){
		return this.name;
	},
	
	getInfo : function(){
		return { 
				thumbnail : this.thumbnail,
				time1 : this.time1,
				time2 : this.time2,
				time3 : this.time3,
				player1 : this.player1;
				player2 : this.player2,
				player3 : this.player3,
				trackName : this.name
				};
	}
})