class MyFullVehicle extends CGFobject {
	constructor(scene) {
    super(scene);

    this.flap = new MyFlaps(this.scene);
    this.propeller = new MyPropeller(this.scene);
    this.engine = new MyEngine(this.scene);
    this.gondola = new MyGondola(this.scene);
    this.blimp = new MyBlimp(this.scene);

		this.flapAngle = 0;
		this.shipSpeed = 0;
		this.propellerSpeed = 1;
		this.pitchValue = 0;
		this.rotationalAngle = 0;

    this.initBuffers();
  }


display(){
    this.scene.pushMatrix();
      this.scene.translate(0.50, 0.15, 0);
      this.scene.rotate(Math.PI/2, 0, 0 ,1);
      this.scene.scale(0.15, 0.15 , 0.15);
      this.gondola.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
      this.scene.translate(0,1.25,0);
      this.blimp.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
      this.scene.scale(0.75,0.75,0.75);

      this.scene.pushMatrix();
        this.scene.translate(0.70, 0.15, 0.2);
        this.engine.display();
				this.scene.rotate(this.rotationalAngle, 1,0,0);
				this.propeller.display();
      this.scene.popMatrix();


    this.scene.pushMatrix();
      this.scene.translate(0.70, 0.15, -0.2);
      this.engine.display();
			this.scene.rotate(this.rotationalAngle, 1,0,0);
			this.propeller.display();
    this.scene.popMatrix();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.scale(0.50,0.50,0.50);

    this.scene.pushMatrix();
      this.scene.translate(4,3.5,0);
			this.scene.rotate(this.flapAngle, 0,1,0);
      this.flap.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
      this.scene.translate(4,1.5,0);
			this.scene.rotate(this.flapAngle, 0,1,0);
      this.flap.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
      this.scene.rotate(-Math.PI/2,1,0,0);

      this.scene.pushMatrix();
        this.scene.translate(4,1,2.5);
				this.scene.rotate(-this.pitchValue, 0,1,0);
        this.flap.display();
      this.scene.popMatrix();

      this.scene.pushMatrix();
        this.scene.translate(4,-1,2.5);
				this.scene.rotate(-this.pitchValue, 0,1,0);
        this.flap.display();
      this.scene.popMatrix();
    this.scene.popMatrix();

    this.scene.popMatrix();
  //this.scene.popMatrix();
  }

	update(deltaTime, flapAngle, pitchValue, propellerSpeed, shipSpeed){
		this.flapAngle = flapAngle;
		this.pitchValue = pitchValue;
		this.propellerSpeed = this.propellerSpeed + propellerSpeed + shipSpeed;
		this.rotationalAngle = this.propellerSpeed * Math.PI/60;

	}
}
