Crafty.c("MapData", {
	_imgd: [],
	_floor: [],
	init: function() {
	},

	MapData: function(url) {
		var context = Crafty.canvas.context;
		context.drawImage(Crafty.asset(url), 0, 0);
		this._imgd = context.getImageData(0, 0, 640, 480);
		var data = this._imgd.data;
		var amt = this._imgd.width * this._imgd.height;
		var floorTypes = {
			0 : "black",
			16777215 : "white",
			65313 : "A",
			16711680 : "B",
			9983 : "goal"
		};
		
		var fA = false;
		var fB = false;
		var fG = false;
		
		for(var i = 0, pos = 0; i<amt; i++, pos+=4){
			
			pixel = data[pos] * 65536 + data[pos+1] * 256 + data[pos+2];
			this._floor[i] = floorTypes[pixel];
		}
		
		return this;
	},

	getPixel: function(x, y) {
		var pos = (x+y*this._imgd.width);
		if(x<0||y<0||x>this._imgd.width||y>this._imgd.height) {
			return undefined;
		}
		return this._floor[pos];
	},

	getSpeed: function(x, y) {
		var color = this.getPixel(parseInt(x), parseInt(y));
		var floorSpeeds = {
			"black" : 1.0,
			"white" : 0.5,
			"A" : 1.0,
			"B" : 1.0,
			"goal" : 1.0
		};
		return floorSpeeds[color]||0.0;
	}
});