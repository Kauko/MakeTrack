Crafty.c("TrackList", {

	init : function(){
		this.requires("2D, Image, Canvas");
	},
	
	TrackList : function(){
	
		this.tracks = [];
		var trackDataList = PLACEHOLDER(); //Implement
		
		for(var i in TrackDataList){
			this.tracks.push(Crafty.e("TrackListEntry, SpriteFontWriter").TrackListEntry(trackDataList[i]).SpriteFontWriter(5,i*10+5));
			//var a = this.tracks[i];
			//var b = this.tracks[i].getTrackName();
			//a.setContent(b);
			//a.writeText();
			this.tracks[i].setContent(this.tracks[i].getTrackName()).writeText();
		}
		
		this.bind("SelectorMoved", function(e){
			this.tracks[e.index].highlight();
		});
	
		return this;
	},
	
	getTrackPreviewData : function(i){
		return PLACEHOLDER(this.tracks[i].getTrackId());
	}
});