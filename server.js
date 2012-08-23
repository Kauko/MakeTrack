var xmlhttp;
 
if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
}
else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
 
requestTrackList = function(context) {
        xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        var response = JSON.parse(xmlhttp.responseText);
                        context.listResponseHandler(response.tracks);
                }
        }
 
        xmlhttp.open("POST", "/tracks", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("")
}
               
requestTrackPreview = function(trackId) {
        xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        var response = JSON.parse(xmlhttp.responseText);
                        updatePreview(response);
                }
        }
 
        xmlhttp.open("POST", "/" + trackId + "/preview", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("")
}
 
requestTrackData = function(trackId) {
        xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        var response = JSON.parse(xmlhttp.responseText);
                        playTrack(response);
                }
        }
 
        xmlhttp.open("POST", "/" + trackId + "/data", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("")
}
 
requestRecordForm = function(trackId, recordTime) {
		xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					showRecordForm(xmlhttp.responseText);			
				}
		}
		
		xmlhttp.open("POST", "/" + trackId + "/recordform/" + recordTime, true);
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttp.send("");
}
 
saveTrackRecord = function(trackId, playerName, recordTime) {
        xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        var response = JSON.parse(xmlhttp.responseText);
						document.getElementById("recordform").innerHTML = "";
                        returnToMenu();
                }
        }
 
        xmlhttp.open("POST", "/" + trackId + "/newrecord/" + playerName + "/" + recordTime, true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("");
}