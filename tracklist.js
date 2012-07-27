Crafty.C("TrackList", function(){

	this.tracks = [];
	init : function(){
		this.requires("2D, Image, Canvas");
	},
	
	TrackList : function(){
	
		for(var i in TrackDataList){
			tracks.push(Crafty.e("TrackListEntry, SpriteFontWriter").TrackListEntry(TrackDataList[i]).SpriteFontWriter(5,i*10+5));
			tracks[i].setContent(tracks[i].getTrackName()).writeText();
		}
		
		this.bind("SelectorMoved", function(e){
			tracks[e.index].highlight();
			updatePreview(tracks[e.index].getInfo());
		};
		
		this.bind("TrackSelected", function(e){
			selectedTrack = tracks[e.index].getTrackName();
			Crafty.scene("loading_track");
		};
		return this;
	},
	
	getTrackInfo : function(i){
		return this.tracks[i].getInfo();
	}
};