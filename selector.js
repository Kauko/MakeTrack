Crafty.c("Selector", function(){
	init : function() {
		this.requires("Keyboard");
	},
	Selector : function(i) {
		this.max = i;
		this.bind("EnterFrame", function(){
			if(this.isDown(Crafty.keys.W) || this.isDown(Crafty.keys.Up)){
				if(trackIndex == 0)
					trackIndex = this.max;
				else
					trackIndex--;
			}
			
			if(this.isDown(Crafty.keys.S) || this.isDown(Crafty.keys.Down)){
				if(trackIndex == this.max)
					trackIndex = 0;
				else
					trackIndex++;
			}
			
			if(this.isDown(Crafty.keys.Space)){
				Crafty.scene("loading_track");
			}
		});
		return this;
	}
});