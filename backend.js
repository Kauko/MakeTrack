

showTrackList = function(response) {
	//deploy tracklist
	//from object
	//{tracks: [[id, name], ]}
}

showTrackPreview = function(response) {
	//{name: name, handle: handle, records: [[name, time], ]
	//thumbnail: /tracks/thumb/handle.png
} 

showTrackData = function(response) {
	//{name: name, handle: handle, init_x: init_x, init_y: init_y, init_dir: init_dir, checkpoints: checkpoints}
	//texture: /tracks/texture/handle.png
	//mapdata: /tracks/mapdata/handle.png
} 

var xmlhttp;

if (window.XMLHttpRequest) {
	xmlhttp = new XMLHttpRequest(); 
}
else {
	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

requestTrackList = function(handler) {
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var response = JSON.parse(xmlhttp.responseText);
			handler(response);
		}
	}

	xmlhttp.open("POST", "/tracks", true); 
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
	xmlhttp.send("")
}
		
requestTrackPreview = function(handler, trackId) {
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var response = JSON.parse(xmlhttp.responseText);
			handler(response);
		}
	}

	xmlhttp.open("POST", "/" + trackId + "/preview", true); 
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
	xmlhttp.send("")
}

requestTrackData = function(handler, trackId) {
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var response = JSON.parse(xmlhttp.responseText);
			handler(response);
		}
	}

	xmlhttp.open("POST", "/" + trackId + "/data", true); 
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
	xmlhttp.send("")
}

saveTrackRecord = function(handler, trackId, playerName, recordTime) {
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var response = JSON.parse(xmlhttp.responseText);
			handler(response);
		}
	}

	xmlhttp.open("POST", "/" + trackId + "/newrecord/" + playerName + "/" + recordTime, true); 
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
	xmlhttp.send("")
}


	

