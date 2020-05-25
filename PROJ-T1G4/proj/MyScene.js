/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();

    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.setUpdatePeriod(50);

        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.triangles = new MyTriangles(this);   ///Alterei o nome do ficheiro erros might occur
        this.incompleteSphere = new MySphere(this, 16, 8);
        this.cilinder = new MyCilinder(this, 6, 1);
        this.sphere = new MySphere(this, 16, 8);
        this.unitCube = new MyUnitCubeQuad(this);
        this.pyramid = new MyPyramid(this,4,1);
        this.vehicle = new MyVehicle(this);
        this.flap = new MyFlaps(this);
        this.gondola = new MyGondola(this);
        this.blimp = new MyBlimp(this);
        this.propeller = new MyPropeller(this);
        this.engine = new MyEngine(this);
        this.fullVehicle = new MyFullVehicle(this);
        this.terrain= new MyTerrain(this);
        this.supply = new MySupply(this);
        this.supplies = [
            new MySupply(this),
            new MySupply(this),
            new MySupply(this),
            new MySupply(this),
            new MySupply(this),
        ];

        //ADDED NEEDS TO BE REVIEWED
        this.sphereMaterial = new CGFappearance(this);
        this.sphereMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.sphereMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.sphereMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.sphereMaterial.setShininess(10.0);
        this.sphereMaterial.loadTexture('images/earth.jpg');
        this.sphereMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.unitCubeMaterial = new CGFappearance(this);
        this.unitCubeMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.unitCubeMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.unitCubeMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.unitCubeMaterial.setShininess(10.0);
        this.unitCubeMaterial.loadTexture('images/cubemap.png');
        this.unitCubeMaterial.setTextureWrap('REPEAT', 'REPEAT');

        //Objects connected to MyInterface
        this.selectedTexture = 1;
        this.speedFactor = 1;
        this.scaleFactor = 1;


        this.textures = [
            new CGFtexture(this, 'images/earth.jpg'),
            new CGFtexture(this, 'images/cubemap.png'),

        ];

        this.textureList = {
            'Earth' : 0,
            'CubeMap' : 1,
        };

        this.objectComplexity = 0.5;

        //Objects connected to MyInterface
        this.displayAxis = true;

        this.lastUpdateTime = 0;
        this.SupplyCounter=0;


    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(21, 18,21 ), vec3.fromValues(6, 10, 6)); //sorry nao consegui
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    checkKeys() {
      var text = "Keys pressed: ";
      var keysPressed = false;

      //Check for key codes e.g. in https://keycode.info/
      if ( this.gui.isKeyPressed("KeyW")) {
        this.vehicle.accelerate(1);
        text += " W ";
        keysPressed = true;
      }

      if (this.gui.isKeyPressed("KeyS")) {
        this.vehicle.accelerate(-1);
        text += " S ";
        keysPressed = true;
      }

      if (this.gui.isKeyPressed("KeyA")) {
        this.vehicle.turn(Math.PI/50);
        text += " A ";
        keysPressed = true;
      }

      if (this.gui.isKeyPressed("KeyD")) {
        this.vehicle.turn(-Math.PI/50);
        text += " D ";
        keysPressed = true;
      }

      if (this.gui.isKeyPressed("KeyR")) {
        this.vehicle.reset();
        text += " R ";
        keysPressed = true;
        this.SupplyCounter =0;
        //this.supply.state= SupplyStates.INACTIVE;
        for(var i =0; i < 5; i ++){
          this.supplies[i].state = SupplyStates.INACTIVE;
        }

      }

      if (this.gui.isKeyPressed("ShiftLeft")) {
        this.vehicle.pitch(Math.PI/50);
        text += " ShiftLeft ";
        keysPressed = true;
      }

      if (this.gui.isKeyPressed("Space")) {
        this.vehicle.pitch(-Math.PI/50);
        text += " Space ";
        keysPressed = true;
      }

      if (this.gui.isKeyPressed("KeyL")){
        //this.supply.drop(this.vehicle.shipX, this.vehicle.shipZ);
        if (this.SupplyCounter < 5){
          this.supplies[this.SupplyCounter].drop(this.vehicle.shipX, this.vehicle.shipZ);
          this.SupplyCounter++;
          text += " L ";
          keysPressed = true;

        }

      }

      if (keysPressed){
        console.log(text);
      }
    }



    // called periodically (as per setUpdatePeriod() in init())
    update(t){

        this.checkKeys();
      //  console.log(t);
      //  console.log(this.lastUpdateTime);
        this.vehicle.update(t, this.lastUpdateTime);
        //this.supply.update();
        this.lastUpdateTime = t;
        for (var b =0; b< 5 ; b++){
          this.supplies[b].update();
        }



    }

    updateAppliedTexture() {
        this.Material.setTexture(this.textures[this.selectedTexture]);
    }

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section

        //This sphere does not have defined texture coordinates
        //this.incompleteSphere.display();

        //this.cilinder.display();

        //this.sphereMaterial.apply()
        //this.sphere.display();

      //  this.unitCubeMaterial.apply();




//        this.pushMatrix();
  //        this.scale(this.scaleFactor,this.scaleFactor,this.scaleFactor);
    //      this.translate(0,0,0);
      //    this.setDefaultAppearance();
        //  this.vehicle.display();
        //this.popMatrix();

          //this.flap.display();

        this.pushMatrix();
          this.vehicle.display();
        //  for (var c =0; c< 5 ; c++){
        //    this.supplies[c].display();
      //    }
         this.terrain.display();
           this.scale(50, 50, 50);
          this.unitCube.display();
        this.popMatrix();

//this.supply.display();
        //


        // ---- END Primitive drawing section
    }
    //  this.supply.display();
}
