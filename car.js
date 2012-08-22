Crafty.c("Car", {
	Car : function(dir){
		this._speed = 0;
		this._acceleration = 0.5;
		this._brakes = 0.9
		this._maxSpeed = 7;
		this.rotation = dir;
		this._handling = 3;
		this._previousCheckpoint = "";
		this.checkpointsPassed = 0;
		this.goalEnabled = false;
		this.reverseCounter = 0;
		this.offroadCounter = 1;
		
		this.bind("EnterFrame", function(e) {
			
			var slide = 0;
			var bHandbrake = false;
			if(this.offroadCounter > 2)
				this.offroadCounter = 2;
			else if(Crafty((Crafty("MapData"))[0]).getSpeed(this.x + this.w/2, this.y+this.h/2) != 1.0){
				this.offroadCounter += 0.02;
			}else if(this.offroadCounter > 1){
				this.offroadCounter -= 1;
			}
			
			if(this.offroadCounter < 1)
				this.offroadCounter = 1;
			
			//forward
			if(this.isDown(Crafty.keys.W)){
				if(starttime == 0)
					starttime = e.frame * 20;
				this.reverseCounter = 0;
				if(this._speed > 1)
					this._speed += this._acceleration / this._speed / this.offroadCounter;// * Crafty((Crafty("MapData"))[0]).getSpeed(this.x, this.y);
				else
					this._speed += this._acceleration / this.offroadCounter;// * Crafty((Crafty("MapData"))[0]).getSpeed(this.x, this.y);
			}
			
			//decay speed
			this._speed = this._speed * 0.98 / this.offroadCounter;// * Crafty((Crafty("MapData"))[0]).getSpeed(this.x, this.y);
		
			//reverse
			if(this.isDown(Crafty.keys.S)){
				if(starttime == 0)
					starttime = e.frame * 20;
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
					this._speed -= this._brakes / this.offroadCounter;// * Crafty((Crafty("MapData"))[0]).getSpeed(this.x, this.y);
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
			
			if(Crafty((Crafty("MapData"))[0]).getPixel(parseInt(this.x + this.w/2),parseInt(this.y+this.h/2)) == "A" || Crafty((Crafty("MapData"))[0]).getPixel(parseInt(this.x + this.w/2),parseInt(this.y+this.h/2))){
				if(Crafty((Crafty("MapData"))[0]).getPixel(parseInt(this.x + this.w/2),parseInt(this.y+this.h/2)) != this.previousCheckpoint){
					this.previousCheckpoint = Crafty((Crafty("MapData"))[0]).getPixel(parseInt(this.x + this.w/2),parseInt(this.y+this.h/2));
					this.checkpointsPassed++;
					if(Crafty((Crafty("Map"))[0]).getNumberOfCheckpoints() - this.checkpointsPassed == 0){
						this.goalEnabled = true;
					}
				}
			}
			
			
			if(Crafty((Crafty("MapData"))[0]).getPixel(parseInt(this.x + this.w/2),parseInt(this.y+this.h/2)) == "goal" && this.goalEnabled == true){
				Crafty.scene("race_over");
			}
			
			this.x += Math.sin(this._rotation * Math.PI / 180) * this._speed;
			this.y += Math.cos(this._rotation * Math.PI / 180) * -this._speed;
			
		})
		return this;
	}
})