/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    initKeys() {
      //Creates reference from the scene to gui
      this.scene.gui = this;
      //disable the processKeyboard function
      this.processKeyboard = function(){}
      //create a named array to store which keys are being processed
      this.activeKeys={};
    }

      processKeyDown(event) {
        //called when a key us pressed down
        //marj ut as active in the Array
        this.activeKeys[event.code]=true;
      };

      processKeyUp(event) {
        //called when a key is released, mark it as inactive in the Array
        this.activeKeys[event.code]=false;
      };

      isKeyPressed(keyCode) {
        //returns true if a key is marked as pressed, false otherwise
        return this.activeKeys[keyCode] || false;
      }


    init(application) {
        // call CGFinterface init
        super.init(application);

        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();

        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');

        this.gui.add(this.scene, 'selectedTexture', this.scene.textureList).name('Selected Texture').onChange(this.scene.updateAppliedTexture.bind(this.scene));

        this.gui.add(this.scene, 'speedFactor', 0.1, 3).name('Speed Factor');
        this.gui.add(this.scene, 'scaleFactor', 0.1, 3).name('Scale Factor');
        this.initKeys();

        return true;
    }

}
