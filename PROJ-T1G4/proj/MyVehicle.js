class MyVehicle extends CGFobject {
	constructor(scene) {
		super(scene);

		this.fullVehicle = new MyFullVehicle(this.scene);

		this.degrees = 0;
		this.shipX = 0 ;
		this.shipY = 10;
		this.shipZ = 0;
		this.shipSpeed = 0;
		this.flapAngle = 0;
		this.pitchValue = 0;
		this.propellerSpeed = 0.5;

		this.autoPilot = false;
		this.autoPilotAngle = 0;
		this.xCenter = 0;
		this.zCenter = 0;

		this.initBuffers();

	}



	update(t, lastUpdateTime){
		let deltaTime = t - lastUpdateTime;

		this.fullVehicle.update(deltaTime * 0.0001, this.flapAngle, this.pitchValue, this.propellerSpeed, this.shipSpeed);
				this.shipX += deltaTime * 0.0001 * this.shipSpeed * this.scene.speedFactor * Math.sin(this.degrees);
				this.shipY += deltaTime * 0.0001 * this.shipSpeed * this.scene.speedFactor * Math.sin(this.pitchValue);
	    	this.shipZ += deltaTime * 0.0001 * this.shipSpeed * this.scene.speedFactor * Math.cos(this.degrees);
				this.flapAngle = 0;
				this.pitchValue = 0;
	}

	turn(val){
		this.degrees = this.degrees + val;
		if(val < 0){
			this.flapAngle  = Math.PI * 0.2;
		}else {
			this.flapAngle  = -Math.PI * 0.2;
		}
	}

	accelerate(val){
		this.shipSpeed = this.shipSpeed + val;
			this.propellerSpeed = this.propellerSpeed + this.shipSpeed * val;
	}

	reset(){
		this.degrees = 0;
		this.shipX = 0;
		this.shipY = 10;
		this.shipZ = 0;
		this.shipSpeed = 0;
		this.propellerSpeed = 0.5;
		this.autoPilot = false;
	}



	pitch(pitchValue){
		if(pitchValue > 0){
			this.pitchValue = pitchValue * 10 //* Math.PI * 0.2;
		}else {
			this.pitchValue = pitchValue * 10
		}

	}

  display(){
		this.scene.pushMatrix();
			this.scene.translate(this.shipX, this.shipY, this.shipZ);
			this.scene.rotate(this.degrees, 0, 1, 0);
			this.scene.rotate(Math.PI/2, 0, 1, 0);
			this.fullVehicle.display();
		this.scene.popMatrix();
  }
}
