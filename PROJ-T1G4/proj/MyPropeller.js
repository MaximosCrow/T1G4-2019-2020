class MyPropeller extends CGFobject {
	constructor(scene) {
    super(scene);
    this.sphere = new MySphere(this.scene, 32, 16);
    this.rotationalSpeed = 1;
    this.initBuffers();
  }

  display() {
    this.scene.pushMatrix();
      this.scene.translate(0.20,0,0);
      this.scene.scale(0.2,1,0.2);
      this.scene.scale(0.01, 0.15 , 0.15);
      this.sphere.display();
    this.scene.popMatrix();
  }

  //update(shipSpeed, increment) {
    //if(shipSpeed > 0){
    //  this.rotationalSpeed = shipSpeed;
    //}

  //}
}
