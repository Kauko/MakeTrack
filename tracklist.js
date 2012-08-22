Crafty.c("TrackList", {

	init : function(){
		this.requires("2D, Image, Canvas");
	},
	
	TrackList : function(){	
		this.tracks = [];
		requestTrackList(this);
		
		this.bind("SelectorMoved", function(e){
			for(var i in this.tracks){
				if(i == e.index){
					this.tracks[i].highlight();
				}else{
					this.tracks[i].dehighlight();
				}
			}
		});
		
		return this;
	},
	
	listResponseHandler: function(trackDataList) {
		console.log("e");
		for(var i in trackDataList){
			this.tracks.push(Crafty.e("TrackListEntry, SpriteFontWriter").TrackListEntry(trackDataList[i]).SpriteFontWriter(5,i*10+5));
			this.tracks[i].setContent(this.tracks[i].getTrackName());
			this.tracks[i].eraseText();
			this.tracks[i].writeText();
		};
		this.enableSelector(); 
		this.getTrackPreviewData(0);
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