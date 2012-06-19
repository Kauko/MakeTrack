window.onload = function() {

	Crafty.init(640, 480);
	Crafty.canvas.init();
		
	car = Crafty.e("2D, Canvas, Keyboard, Collision, Solid")
	.origin("center")
	.attr({x: 100, y: 100, _active: true})
	.collision(new Crafty.polygon([[2,12],[7,5],[16,2],[27,7],[30,13],[29,42],[29,56],[24,65],[7,64],[1,56],[3,39],[2,20]]))
	.bind("EnterFrame", function(e){
		if(!this._active) 
			return;
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
			if(this._speed > this._maxSpeed / 2) slide = this._speed * 0.8;
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
	});
};