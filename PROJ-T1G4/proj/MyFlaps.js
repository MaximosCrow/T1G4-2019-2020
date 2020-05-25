/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyFlaps extends CGFobject {
	constructor(scene) {
		super(scene);
		this.triangle = new MyTriangle(this.scene);
		this.diamond = new MyDiamond(this.scene);


		this.initBuffers();
}

  display(){
		this.scene.pushMatrix();
			this.scene.rotate(-Math.PI/4, 0,0,1);

	    this.scene.pushMatrix();
	      this.scene.scale(0.40,0.40,0.40);
	      this.triangle.display();
	    this.scene.popMatrix();

	    this.scene.pushMatrix();
	      this.scene.translate(0.4,0.4,0);
				this.scene.scale(0.8,0.8,0.8);
				//this.scene.rotate();
	      this.diamond.display();
	    this.scene.popMatrix();
		this.scene.popMatrix();

  }
////////////////////////////////////////////////////
//	update(deltaTime, flapAngle){
	//	this.scene.pushMatrix();
		//	this.scene.rotate(flapAngle, 0,1,0);
			//this.flap.display();
		//this.scene.popMatrix();
	//}
}
