class MyBlimp extends CGFobject {
	constructor(scene) {
    super(scene);

    this.sphere = new MySphere(this.scene, 32, 16);

		this.chess = new CGFappearance (this.scene);
		this.chess.setAmbient (0.1,0.1, 0.1,1.0);
		this.chess.setDiffuse (0.9,0.9, 0.9,1.0);
		this.chess.setSpecular (0.1, 0.1, 0.1, 1.0);
		this.chess.setShininess (1.0);
		this.chess.loadTexture('images/chess.jpg');
		this.chess.setTextureWrap('REPEAT', 'REPEAT');
    this.initBuffers();
  }

  display() {
    this.scene.pushMatrix();
		this.chess.apply();
      this.scene.scale(2,1,1);
      this.sphere.display();
    this.scene.popMatrix();


  }
}
