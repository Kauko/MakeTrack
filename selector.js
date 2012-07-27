Crafty.c("Selector", function(){
	this.max = i;
	this.trackIndex;
	
	init : function() {
		this.requires("Keyboard");
	},
	
	Selector : function(i) {
		
		this.bind("EnterFrame", function(){
			if(this.isDown(Crafty.keys.W) || this.isDown(Crafty.keys.Up)){
				if(this.trackIndex == 0)
					this.trackIndex = this.max;
				else
					this.trackIndex--;
					
				Crafty.trigger("SelectorMoved", {index : this.trackIndex});
			}
			
			if(this.isDown(Crafty.keys.S) || this.isDown(Crafty.keys.Down)){
				if(this.trackIndex == this.max)
					this.trackIndex = 0;
				else
					this.trackIndex++;
					
				Crafty.trigger("SelectorMoved", {index : this.trackIndex});
			}
			
			if(this.isDown(Crafty.keys.Space)){
				Crafty.trigger("TrackSelected", {index : this.trackIndex});
				//Crafty.scene("loading_track");
			}
		});
		return this;
	},
	
	getSelectorIndex : function(){
		return this.trackIndex;
	}
});