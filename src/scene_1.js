class scene1 extends Phaser.Scene {
    constructor() {
        super("scene1");
    }
    preload() {
        
        this.load.tilemapTiledJSON("scene1", "LD/scene1.json");
        this.load.image("jeudetuile","assets/tiles1.png");
        this.load.image("backgroundi", "assets/BG.png") 
        this.load.image("attack","assets/attack.png");
        this.load.spritesheet("hero","assets/spriteshithero.png",
        { frameWidth: 400, frameHeight: 400 });

    }

    create(){
// permet de créer la map, les collisions, et les déplacements
       
        const carteDuNiveau = this.add.tilemap("scene1");

            // importer les TileSet
        const BG = carteDuNiveau.addTilesetImage(
            "BG",
            "backgroundi"
            ); 

        const tiles1 = carteDuNiveau.addTilesetImage(
            "Tiles",
            "jeudetuile"
            );

        const bg_image = carteDuNiveau.createLayer(
            "background_image",
            BG, 
            );

        const background1 = carteDuNiveau.createLayer(
            "background",
            tiles1, 
            );

        const treeb = carteDuNiveau.createLayer(
            "trees back",
            tiles1, 
            );

        const ground = carteDuNiveau.createLayer(
            "ground",
            tiles1, 
            );

        const enemy = carteDuNiveau.createLayer(
            "enemy placement",
            tiles1, 
            );

        const treef = carteDuNiveau.createLayer(
            "trees front",  
            tiles1,
        );

        const foreground = carteDuNiveau.createLayer(
            "foreground",
            tiles1,
        );

        this.player = this.physics.add.sprite(400,400, "hero").setScale(0.3)
        
        
        
    }


    update(){

    }

    
}

