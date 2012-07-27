Crafty.c("TrackList", {

	init : function(){
		this.requires("2D, Image, Canvas");
	},
	
	TrackList : function(){
	
		this.tracks = [];
	
		for(var i in TrackDataList){
			this.tracks.push(Crafty.e("TrackListEntry, SpriteFontWriter").TrackListEntry(TrackDataList[i]).SpriteFontWriter(5,i*10+5));
			var a = this.tracks[i];
			var b = this.tracks[i].getTrackName();
			a.setContent(b);
			a.writeText();
			//this.tracks[i].setContent(this.tracks[i].getTrackName()).writeText();
		}
		
		this.bind("SelectorMoved", function(e){
			this.tracks[e.index].highlight();
		});
		
		this.bind("TrackSelected", function(e){
			selectedTrack = this.tracks[e.index].getTrackName();
			Crafty.scene("loading_track");
		});
		return this;
	},
	
	getTrackInfo : function(i){
		return this.tracks[i].getInfo();
	}
});