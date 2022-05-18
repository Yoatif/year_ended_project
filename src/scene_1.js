class scene1 extends Phaser.Scene {
    constructor() {
        super("scene1");
    }
    preload() {

        //importation carte        
        this.load.tilemapTiledJSON("scene1", "LD/scene1.json");


        //importation tileset
        this.load.image("jeudetuile","assets/tileset_1.png");
         
        //this.load.image("attack","assets/attack.png");    


        //importation spritesheet héro
        this.load.spritesheet("hero_sol_left","assets/hero_sol_left.png",
        { frameWidth: 256, frameHeight: 64 });
        this.load.spritesheet("hero_sol_right","assets/hero_sol_right.png",
        { frameWidth: 256, frameHeight: 64 });
        this.load.spritesheet("hero_plafond_left","assets/hero_plafond_left.png",
        { frameWidth: 256, frameHeight: 64 });
        this.load.spritesheet("hero_plafond_right","assets/hero_plafond_right.png",
        { frameWidth: 256, frameHeight: 64 });


        //importation spritesheet ennemy

    }

    create(){
        // permet de créer la map, les collisions, et les déplacements
       
        const carteDuNiveau = this.add.tilemap("scene1");

            // importer les TileSet
        const tileset = carteDuNiveau.addTilesetImage(
            "tileset_1",
            "jeudetuile"
            ); 

        

        const background = carteDuNiveau.createLayer(
            "background_image",
            tileset, 
            );

       

        const sol = carteDuNiveau.createLayer(
            "sol",
            tileset, 
            );

        const grass = carteDuNiveau.createLayer(
            "drass",
            tileset, 
            );

        const treef = carteDuNiveau.createLayer(
            "trees front",  
            tiles1,
        );

        this.player = this.physics.add.sprite(64, 64, "hero",0).setScale(0.3);


        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('hero_sol_left', {start:1,end:4}),
            frameRate: 10,
            repeat: -1
        });
        
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('hero_sol_right', {start:5,end:8}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'attackright',
            frames: this.anims.generateFrameNumbers('hero', {start:9,end:9}),
            frameRate: 10,
            repeat: 1
        });

        this.anims.create({
            key: 'attackleft',
            frames: this.anims.generateFrameNumbers('hero', {start:10,end:10}),
            frameRate: 10,
            repeat: 1
        });

        

       
        
        
    }


    update(){

    }

    
}

