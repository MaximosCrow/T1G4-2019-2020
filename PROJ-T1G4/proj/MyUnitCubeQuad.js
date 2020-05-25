class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
		super(scene);
    this.base = new MyQuad(this.scene);
    this.top = new MyQuad(this.scene);
    this.side1 = new MyQuad(this.scene);
    this.side2 = new MyQuad(this.scene);
    this.side3 = new MyQuad(this.scene);
    this.side4 = new MyQuad(this.scene);



		var sky = [
			 1/2, 0.0,
			1/2, 1/3,
			1/4, 0,
			1/4, 1/3,
			1/2, 0.0,
		 1/2, 1/3,
		 1/4, 0,
		 1/4, 1/3
		]

		var endlessblue = [
			1/4, 1,
			1/2, 1,
			1/4, 2/3,
			1/2, 2/3,
			1/4, 1,
			1/2, 1,
			1/4, 2/3,
			1/2, 2/3
		]

		var sider1 = [
			0, 2/3,
			1/4, 2/3,
			0, 1/3,
			1/4, 1/3,
			0, 2/3,
			1/4, 2/3,
			0, 1/3,
			1/4, 1/3
		]


		var sider2 = [
			1/4, 2/3,
			1/2, 2/3,
			1/4, 1/3,
			1/2, 1/3,
			1/4, 2/3,
			1/2, 2/3,
			1/4, 1/3,
			1/2, 1/3
		]

		var sider3 = [
			1/2, 2/3,
			3/4, 2/3,
			1/2, 1/3,
			3/4, 1/3,
			1/2, 2/3,
			3/4, 2/3,
			1/2, 1/3,
			3/4, 1/3
		]

		var sider4 = [
			3/4, 2/3,
			1, 2/3,
			3/4, 1/3,
			1, 1/3,
			3/4, 2/3,
			1, 2/3,
			3/4, 1/3,
			1, 1/3
		]


		this.base.updateTexCoords(endlessblue);
		this.baseMaterial = new CGFappearance (this.scene);
		this.baseMaterial.setAmbient (0.1,0.1, 0.1,1.0);
		this.baseMaterial.setDiffuse (0.9,0.9, 0.9,1.0);
		this.baseMaterial.setSpecular (0.1, 0.1, 0.1, 1.0);
		this.baseMaterial.setShininess (1.0);
		this.baseMaterial.loadTexture('images/cubemap.png');
		this.baseMaterial.setTextureWrap('REPEAT', 'REPEAT');

		this.top.updateTexCoords(sky);
    this.topMaterial = new CGFappearance (this.scene);
		this.topMaterial.setAmbient (0.1,0.1, 0.1,1.0);
		this.topMaterial.setDiffuse (0.9,0.9, 0.9,1.0);
		this.topMaterial.setSpecular (0.1, 0.1, 0.1, 1.0);
		this.topMaterial.setShininess (1.0);
		this.topMaterial.loadTexture('images/cubemap.png');
		this.topMaterial.setTextureWrap('REPEAT', 'REPEAT');

		this.side1.updateTexCoords(sider3);
		this.side2.updateTexCoords(sider4);
		this.side3.updateTexCoords(sider2);
		this.side4.updateTexCoords(sider1);
    this.sideMaterial = new CGFappearance (this.scene);
		this.sideMaterial.setAmbient (0.1,0.1, 0.1,1.0);
		this.sideMaterial.setDiffuse (0.9,0.9, 0.9,1.0);
		this.sideMaterial.setSpecular (0.1, 0.1, 0.1, 1.0);
		this.sideMaterial.setShininess (1.0);
		this.sideMaterial.loadTexture('images/cubemap.png');
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
//X-
    this.scene.pushMatrix();
      this.scene.rotate(-Math.PI/2,0,1,0);
      this.scene.translate(0,0,0.5);
      this.side2.display();
    this.scene.popMatrix();

//X+
    this.scene.pushMatrix();
      this.scene.rotate(Math.PI/2,0,1,0);
      this.scene.translate(0,0,0.5);
      this.side3.display();
    this.scene.popMatrix();
//Z+
    this.scene.pushMatrix();
      this.scene.translate(0,0,0.5);
      this.side4.display();
    this.scene.popMatrix();

  this.scene.popMatrix();


  this.scene.pushMatrix();
    this.topMaterial.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.scene.rotate(Math.PI/2,1,0,0);
		//this.scene.rotate(Math.PI,0,0,1);
    this.scene.translate(0,0,-0.5);
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
