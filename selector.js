Crafty.c("Selector", {
	init : function() {
		this.requires("Keyboard");
	},
	
	Selector : function(i) {
		this.max = i;
		this.trackIndex = 0;
		this.bind("EnterFrame", function(){
			if(this.isDown(Crafty.keys.W) || this.isDown(Crafty.keys.UP_ARROW)){
				if(this.trackIndex == 0)
					this.trackIndex = this.max;
				else
					this.trackIndex--;
					
				Crafty.trigger("SelectorMoved", {index : this.trackIndex});
			}
			
			if(this.isDown(Crafty.keys.S) || this.isDown(Crafty.keys.DOWN_ARROW)){
				if(this.trackIndex == this.max)
					this.trackIndex = 0;
				else
					this.trackIndex++;
				
				Crafty.trigger("SelectorMoved", {index : this.trackIndex});
			}
			
			if(this.isDown(Crafty.keys.SPACE)){
				Crafty.trigger("TrackSelected", {index : this.trackIndex});
			}
		});
		return this;
	},
	
	getSelectorIndex : function(){
		return this.trackIndex;
	}
});