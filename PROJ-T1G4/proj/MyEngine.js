class MyEngine extends CGFobject {
	constructor(scene) {
		super(scene);
    this.sphere = new MySphere(this.scene, 32, 16);
    this.initBuffers();

		this.chrom = new CGFappearance (this.scene);
		this.chrom.setAmbient (0.1,0.1, 0.1,1.0);
		this.chrom.setDiffuse (0.9,0.9, 0.9,1.0);
		this.chrom.setSpecular (0.1, 0.1, 0.1, 1.0);
		this.chrom.setShininess (1.0);
		this.chrom.loadTexture('images/chromatic.jpg');
		this.chrom.setTextureWrap('REPEAT', 'REPEAT');
  }

  display() {
    this.scene.pushMatrix();
		this.chrom.apply();
      this.scene.scale(0.25,0.1,0.1);
      this.scene.scale(1,0.80,0.75);
      this.sphere.display();
    this.scene.popMatrix();

  }

}
