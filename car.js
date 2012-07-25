Crafty.c("Car", {
	Car : function(){
		this._speed = 0;
		this._acceleration = 1;
		this._maxSpeed = 10;
		this.rotation = 0;
		this._handling = 1;
		this.bind("EnterFrame", function() {
			var slide = 0;
			
			//forward
			if(this.isDown(Crafty.keys.W)){
				this._speed += this._acceleration;
			}
			
			//decay speed
			this._speed = this._speed * 0.98;
		
			//reverse
			if(this.isDown(Crafty.keys.S)){
				this._speed -= this._acceleration;
			}
			
			//handbrake
			if(this.isDown(Crafty.keys.SPACE)){
				this._speed -= this._speed / 20;
				if(this._speed > this._maxSpeed / 2) 
					slide = this._speed * 0.8;
			}
			
			//turning
			if(this.isDown(Crafty.keys.A)) {				
				this.rotation -= this._speed * this._handling + slide;
			}
				
			if(this.isDown(Crafty.keys.D)) {
				this.rotation += this._speed * this._handling + slide;
			}
				
			//cap the values of the car
			if(this._speed > this._maxSpeed) {
				this._speed = this._maxSpeed;
			}
			
			if(this._speed < -2) {
				this._speed = -2;
			}
			
			this.x += Math.sin(this._rotation * Math.PI / 180) * this._speed;
			this.y += Math.cos(this._rotation * Math.PI / 180) * -this._speed;
		})
		return this;
	}
})