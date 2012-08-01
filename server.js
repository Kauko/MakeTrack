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