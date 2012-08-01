Crafty.c("TrackList", {

	init : function(){
		this.requires("2D, Image, Canvas");
	},
	
	TrackList : function(){	
		this.tracks = [];
		requestTrackList(this);
		
		this.bind("SelectorMoved", function(e){
			this.tracks[e.index].highlight();
		});
		
		return this;
	},
	
	listResponseHandler: function(trackDataList) {
		for(var i in trackDataList){
			this.tracks.push(Crafty.e("TrackListEntry, SpriteFontWriter").TrackListEntry(trackDataList[i]).SpriteFontWriter(5,i*10+5));
			this.tracks[i].setContent(this.tracks[i].getTrackName());
			this.tracks[i].writeText();
		};
	},
	
	getListLength : function(){
		return this.tracks.length;
	},

	getId : function(i){
		return this.tracks[i].getTrackId();
	},
	
	getTrackPreviewData : function(i){
		requestTrackPreview(this.tracks[i].getTrackId());
	}
});