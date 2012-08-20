requestTrackList = function(context) {
	context.listResponseHandler([{ "id" : 1, "name" : "testimaa"}, {"id":2, "name":"action park"},{"id":3, "name":"Hankin seikkailu"}]);
}

requestTrackPreview = function(trackId) {
	updatePreview({"thumbnail" : "http://placehold.it/20/20", "name": "derp", "records" : [{"name":"paavo","time":"00:00:99"},{"name":"ari", "time":"16:59:44"},{"name":"teemu", "time":"99:99:99"}]});
}

requestTrackData = function(trackId) {
	playTrack({"bg":"http://kauko.pingtimeout.net/Maketrack/track.png","data":"http://kauko.pingtimeout.net/Maketrack/track_data.png","checkpoints":3}); 
}

saveTrackRecord = function(context, trackId, playerName, recordTime) {
	context.responseHandler(); 
}