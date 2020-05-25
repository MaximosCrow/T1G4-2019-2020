class MyTerrain extends CGFobject
{
	constructor(scene) {
		super(scene);
		this.floor = new MyPlane(this.scene, 20);
		this.shade= new CGFshader(this.scene.gl, 'shaders/terrain.vert', 'shaders/terrain.frag');
		this.shade.setUniformsValues({uSampler1 :1});
		this.textureHeights = new CGFtexture (this.scene, 'images/heightmap.png');


		this.mater = new CGFappearance (this.scene);
		this.mater.setAmbient (0.1,0.1, 0.1,1.0);
		this.mater.setDiffuse (0.9,0.9, 0.9,1.0);
		this.mater.setSpecular (0.1, 0.1, 0.1, 1.0);
		this.mater.setShininess (1.0);
		this.mater.loadTexture('images/terrain.jpg');
		this.mater.setTextureWrap('REPEAT', 'REPEAT');


	}

  display(){
this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		this.mater.apply();
    this.textureHeights.bind(1);
  	this.scene.setActiveShader(this.shade);

    this.scene.pushMatrix();

    this.scene.rotate(-Math.PI/2.0, 1, 0, 0);
    this.scene.scale(50, 50, 1);
    this.floor.display();

    this.scene.popMatrix();

    this.scene.setActiveShader(this.scene.defaultShader);

  }

};
