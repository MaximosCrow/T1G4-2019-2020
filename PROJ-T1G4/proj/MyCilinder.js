class MyCilinder extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;//3
        this.stacks = stacks;//1
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;
        var j = 0;
        var n = this.slices * 2;

        for(var i = 0; i < this.slices; i++){
            j = 2 * i;
            this.vertices.push(Math.cos(ang), 0, -Math.sin(ang));
            this.vertices.push(Math.cos(ang), 1, -Math.sin(ang));
            this.indices.push(j, (j + 2) % n , (j+1) % n);
            this.indices.push((j+1) % n, (j+2)% n, (j+3) % n);
            this.normals.push(Math.cos(ang), 0, -Math.sin(ang));
            this.normals.push(Math.cos(ang), 0, -Math.sin(ang));
            ang+=alphaAng;
        }



        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

}
