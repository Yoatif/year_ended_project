class Titlescreen extends Phaser.Scene {
    constructor() {
        super("Titlescreen"); 
    }

    preload(){
        this.load.image("TitleScreen", "assets/menu.png");
        //this.load.image("boutonplay", "assets/start.png");
        //this.load.image("boutonquit", "assets/quit.png");
        this.load.scene("scene1", "src/scene1.js")


    }

    create(){


        var group = this.add.group({
            key: 'TitleScreen',
            frameQuantity: 32,
            setXY: { x: 0, y: 0 },
            //setScale: { x: 0.5, y: 0.4, }
        });
        
        firstScreen = this.add.image(0, 0, "TitleScreen");
        
        
        //this.cursors = this.input.keyboard.createCursorKeys();

        
        var boutonplay = this.add.image(500,250, "boutonplay").setInteractive();
        boutonplay.on("pointerdown", function (pointer){
            this.scene.start("scene1")
        });

        boutonplay.setScale(0.2)

        var boutonquit = this.add.image(500,500, "boutonquit").setInteractive();
        boutonquit.on("pointerdown", function (pointer){
            this.scene.stop("Titlescreen");
        });

        boutonquit.setScale(0.2)

    }

    update(){

        /*if (this.cursors.space.isDown){
            this.scene.start("scene1");
        }*/

    }
}

