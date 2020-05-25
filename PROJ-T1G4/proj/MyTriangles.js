class MyTriangles extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0, 0, 0,									//0
			1, 0, 0,									//1
			0.5, Math.sqrt(3)/2 , 0,	//2
			-0.5, Math.sqrt(3)/2, 0,	//3
			-1, 0, 0,									//4
			-0.5, -Math.sqrt(3)/2, 0,	//5
			0.5, -Math.sqrt(3)/2, 0		//6


		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			0, 2, 3,
			0, 3, 4,
			0, 4, 5,
			0, 5, 6,
			0, 6, 1,



		];

		this.normals = [
			0, 0, 1,	//0
			0, 0, 1,	//1
			0, 0, 1		//2
		]

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
		this.initNormalVizBuffers();
	}
}
