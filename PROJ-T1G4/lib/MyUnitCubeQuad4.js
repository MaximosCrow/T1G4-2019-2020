class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
		super(scene);
    this.base = new MyQuad(this.scene);
    this.top = new MyQuad(this.scene);
    this.side1 = new MyQuad(this.scene);
    this.side2 = new MyQuad(this.scene);
    this.side3 = new MyQuad(this.scene);
    this.side4 = new MyQuad(this.scene);


		this.baseMaterial = new CGFappearance (this.scene);
		this.baseMaterial.setAmbient (0.1,0.1, 0.1,1.0);
		this.baseMaterial.setDiffuse (0.9,0.9, 0.9,1.0);
		this.baseMaterial.setSpecular (0.1, 0.1, 0.1, 1.0);
		this.baseMaterial.setShininess (1.0);
		this.baseMaterial.loadTexture('images/mineBottom.png');
		this.baseMaterial.setTextureWrap('REPEAT', 'REPEAT');

    this.topMaterial = new CGFappearance (this.scene);
		this.topMaterial.setAmbient (0.1,0.1, 0.1,1.0);
		this.topMaterial.setDiffuse (0.9,0.9, 0.9,1.0);
		this.topMaterial.setSpecular (0.1, 0.1, 0.1, 1.0);
		this.topMaterial.setShininess (1.0);
		this.topMaterial.loadTexture('images/mineTop.png');
		this.topMaterial.setTextureWrap('REPEAT', 'REPEAT');

    this.sideMaterial = new CGFappearance (this.scene);
		this.sideMaterial.setAmbient (0.1,0.1, 0.1,1.0);
		this.sideMaterial.setDiffuse (0.9,0.9, 0.9,1.0);
		this.sideMaterial.setSpecular (0.1, 0.1, 0.1, 1.0);
		this.sideMaterial.setShininess (1.0);
		this.sideMaterial.loadTexture('images/mineSide.png');
		this.sideMaterial.setTextureWrap('REPEAT', 'REPEAT');


		this.initBuffers();


	}


display() {



  this.scene.pushMatrix();
    this.sideMaterial.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

    this.scene.pushMatrix();
      this.scene.rotate(Math.PI,0,1,0);
      this.scene.translate(0,0,0.5);
      this.side1.display();
    this.scene.popMatrix();

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

  this.scene.popMatrix();


  this.scene.pushMatrix();
    this.topMaterial.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.scene.rotate(-Math.PI/2,1,0,0);
    this.scene.translate(0,0,0.5);
    this.top.display();
  this.scene.popMatrix();


  this.scene.pushMatrix();
    this.baseMaterial.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.scene.rotate(Math.PI/2,1,0,0);
    this.scene.translate(0,0,0.5);
    this.base.display();
  this.scene.popMatrix();


	}
}
