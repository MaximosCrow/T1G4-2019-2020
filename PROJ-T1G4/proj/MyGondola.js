class MyGondola extends CGFobject {
	constructor(scene) {
    super(scene);

    this.sphere = new MySphere(this.scene, 32, 16);
    this.cilinder = new MyCilinder(this.scene, 32, 1);
		this.white = new CGFappearance (this.scene);
		this.white.setAmbient (0.1,0.1, 0.1,1.0);
		this.white.setDiffuse (0.9,0.9, 0.9,1.0);
		this.white.setSpecular (0.1, 0.1, 0.1, 1.0);
		this.white.setShininess (1.0);
		this.white.loadTexture('images/whitewood.png');
		this.white.setTextureWrap('REPEAT', 'REPEAT');

    this.initBuffers();
  }

  display() {
    this.scene.pushMatrix();
      //this.scene.rotate(Math.PI/2, 0, 1, 0);
			this.white.apply();
      this.scene.scale(1,7,1);
      this.cilinder.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
		this.white.apply();
      this.sphere.display();
      this.scene.translate(0,7,0);
      this.sphere.display();
    this.scene.popMatrix();


  }
}
