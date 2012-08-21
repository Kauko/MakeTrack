Crafty.c("Car", {
	Car : function(){
		this._speed = 0;
		this._acceleration = 0.5;
		this._brakes = 0.9
		this._maxSpeed = 7;
		this.rotation = 0;
		this._handling = 3;
		this._previousCheckpoint = "";
		this.checkpointsPassed = 0;
		this.goalEnabled = false;
		this.reverseCounter = 0;
		
		this.bind("EnterFrame", function(e) {
			
			/*if(e.frame * 20 - this.foo > 1000){
				this.foo = e.frame * 20;
				var bar = new Date(this.foo);
				//console.log(bar.getSeconds() + "." + bar.getMilliseconds());
			}*/
			
			var slide = 0;
			var bHandbrake = false;
			
			//forward
			if(this.isDown(Crafty.keys.W)){
				this.reverseCounter = 0;
				if(this._speed > 1)
					this._speed += this._acceleration / this._speed;// * Crafty((Crafty("MapData"))[0]).getSpeed(this.x, this.y);
				else
					this._speed += this._acceleration;// * Crafty((Crafty("MapData"))[0]).getSpeed(this.x, this.y);
			}
			
			//decay speed
			this._speed = this._speed * 0.98;// * Crafty((Crafty("MapData"))[0]).getSpeed(this.x, this.y);
		
			//reverse
			if(this.isDown(Crafty.keys.S)){
				if(this._speed == 0 && this.reverseCounter < 10)
					this.reverseCounter++;
				if(this._speed > 1){
					var foo = this._brakes / this._speed;
					if(foo < 0.4)
						foo = 0.4;
					this._speed -= foo;
					if(this._speed < 0 && this.reverseCounter < 10)
						this._speed = 0;
				}else{
					this._speed -= this._brakes;
					if(this._speed < 0 && this.reverseCounter < 10)
						this._speed = 0;
				}
			}
			
			//handbrake
			if(this.isDown(Crafty.keys.SPACE)){
				this._speed -= this._speed / 10;
				//if(this._speed > this._maxSpeed / 2) 
				slide = 0.2;
				bHandbrake = true;
			}
			
			//turning
			if(this.isDown(Crafty.keys.A)) {
				if(this._speed >= 1){
					slide += this._speed * this._speed / this._maxSpeed;
					//slide = slide * slide;
				}
				if(slide < 1 && !bHandbrake)
					slide = 1;
				this.rotation -= this._speed * this._handling / slide;
			}
				
			if(this.isDown(Crafty.keys.D)) {
				if(this._speed >= 1){
					slide += this._speed * this._speed / this._maxSpeed;
					//slide = slide * slide;
				}
				if(slide < 1 && !bHandbrake)
					slide = 1;
				this.rotation += this._speed * this._handling / slide;
			}
				
			//cap the values of the car
			if(this._speed > this._maxSpeed) {
				this._speed = this._maxSpeed;
			}
			
			if(this._speed < -2) {
				this._speed = -2;
			}
			
			if(Crafty((Crafty("MapData"))[0]).getPixel(parseInt(this.x),parseInt(this.y)) == "A" || Crafty((Crafty("MapData"))[0]).getPixel(parseInt(this.x),parseInt(this.y)) == "B"){
				//console.log("on point");
				if(Crafty((Crafty("MapData"))[0]).getPixel(parseInt(this.x),parseInt(this.y)) != this.previousCheckpoint){
					//console.log("point was new");
					this.previousCheckpoint = Crafty((Crafty("MapData"))[0]).getPixel(parseInt(this.x),parseInt(this.y));
					this.checkpointsPassed++;
					if(Crafty((Crafty("Map"))[0]).getNumberOfCheckpoints() - this.checkpointsPassed == 0){
						//console.log("get to tha choppa!");
						this.goalEnabled = true;
					}
				}
			}
			
			
			if(Crafty((Crafty("MapData"))[0]).getPixel(parseInt(this.x),parseInt(this.y)) == "goal" && this.goalEnabled == true){
				Crafty.scene("race_over");
				//console.log("you win");
			}
			
			this.x += Math.sin(this._rotation * Math.PI / 180) * this._speed;
			this.y += Math.cos(this._rotation * Math.PI / 180) * -this._speed;
			
		})
		return this;
	}
})