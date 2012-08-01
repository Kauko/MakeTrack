Crafty.c("Selector", {
	init : function() {
		this.requires("Keyboard");
	},
	
	Selector : function(i) {
		this.max = this.getListLength()-1;
		this.trackIndex = 0;
		this.bind("KeyDown", function(e){
			if(e.keyCode == Crafty.keys.W || e.keyCode == Crafty.keys.UP_ARROW){
				if(this.trackIndex == 0)
					this.trackIndex = this.max;
				else
					this.trackIndex--;
					
				Crafty.trigger("SelectorMoved", {index : this.trackIndex});
			}
			
			if(e.keyCode == Crafty.keys.S || e.keyCode == Crafty.keys.DOWN_ARROW){
				if(this.trackIndex == this.max)
					this.trackIndex = 0;
				else
					this.trackIndex++;
				
				Crafty.trigger("SelectorMoved", {index : this.trackIndex});
			}
			
			if(e.keyCode == Crafty.keys.SPACE){
				Crafty.trigger("TrackSelected", {index : this.trackIndex});
			}
		});
		return this;
	},
	
	getSelectorIndex : function(){
		return this.trackIndex;
	}
});