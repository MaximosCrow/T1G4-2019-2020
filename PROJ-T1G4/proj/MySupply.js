const SupplyStates = {
INACTIVE: 0,
FALLING: 1,
LANDED: 2
};

class MySupply extends CGFobject {


	constructor(scene) {
		super(scene);
    this.x = 0;
    this.y = this.scene.vehicle.shipY - 0.5;
    this.z = 0;

    this.base = new MyQuad(this.scene);
    this.top = new MyQuad(this.scene);
    this.side1 = new MyQuad(this.scene);
    this.side2 = new MyQuad(this.scene);
    this.side3 = new MyQuad(this.scene);
    this.side4 = new MyQuad(this.scene);


  this.state=SupplyStates.INACTIVE;



		this.material = new CGFappearance (this.scene);
		this.material.setAmbient (0.1,0.1, 0.1,1.0);
		this.material.setDiffuse (0.9,0.9, 0.9,1.0);
		this.material.setSpecular (0.1, 0.1, 0.1, 1.0);
		this.material.setShininess (1.0);
		this.material.loadTexture('images/ConcretePowder.png');
		this.material.setTextureWrap('REPEAT', 'REPEAT');


		this.initBuffers();


	}

  update() {
       if (this.state == SupplyStates.FALLING) {
         if (this.y <= 0.5) this.land();
				else{this.y -= 10/60;} //tentar com interpolacao linear

       }
   }


	 drop(xPos,zPos){
		this.state = SupplyStates.FALLING;
		this.x = xPos;
		this.z = zPos;
}

land(){
	this.state = SupplyStates.LANDED;
}



display() {


  this.scene.pushMatrix();
	this.material.apply();
	this.scene.translate(this.x,this.y,this.z);
if (this.state == SupplyStates.LANDED){
    this.scene.pushMatrix();
      this.scene.rotate(Math.PI,0,1,0);
      this.scene.translate(0,0,0.5);
      this.side1.display();
    this.scene.popMatrix();
//X-
    this.scene.pushMatrix();
      this.scene.rotate(-Math.PI/2,0,1,0);
      this.scene.translate(0,0,0.5);
      this.side2.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
      this.scene.rotate(Math.PI/2,0,1,0);
      this.scene.translate(0,0,0.5);
      this.side3.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
      this.scene.translate(0,0,0.5);
      this.side4.display();
    this.scene.popMatrix();

  this.scene.pushMatrix();
    this.scene.rotate(Math.PI/2,1,0,0);
    this.scene.translate(0,0,-0.5);
    this.top.display();
  this.scene.popMatrix();

  this.scene.pushMatrix();
    this.scene.rotate(Math.PI/2,1,0,0);
    this.scene.translate(0,0,0.5);
    this.base.display();
  this.scene.popMatrix();
}

if (this.state == SupplyStates.FALLING){
    this.scene.pushMatrix();
      this.scene.rotate(Math.PI,0,1,0);
      this.scene.translate(0,0,0.5);
      this.side1.display();
    this.scene.popMatrix();
//X-
    this.scene.pushMatrix();
      this.scene.rotate(-Math.PI/2,0,1,0);
      this.scene.translate(0,0,0.5);
      this.side2.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
      this.scene.rotate(Math.PI/2,0,1,0);
      this.scene.translate(0,0,0.5);
      this.side3.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
      this.scene.translate(0,0,0.5);
      this.side4.display();
    this.scene.popMatrix();

  this.scene.pushMatrix();
    this.scene.rotate(Math.PI/2,1,0,0);
    this.scene.translate(0,0,-0.5);
    this.top.display();
  this.scene.popMatrix();

  this.scene.pushMatrix();
    this.scene.rotate(Math.PI/2,1,0,0);
    this.scene.translate(0,0,0.5);
    this.base.display();
  this.scene.popMatrix();
}


	this.scene.popMatrix();


	}
}
