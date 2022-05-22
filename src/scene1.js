class scene1 extends Phaser.Scene {
    constructor() {
        super("scene1");
    }
    preload() {

        //importation carte        
        this.load.tilemapTiledJSON("scene1", "LD/scene1.json");


        //importation tileset
        this.load.image("jeudetuile","assets/tileset_1.png");
         
        //this.load.image("attack","assets/attack.png");*
        
        //importation consommable
        //this.load.image("cigarette", "assets/")


        //importation spritesheet héro
        this.load.image("hero", "assets/hero.png")
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
            "background",
            tileset, 
            );

        const sol = carteDuNiveau.createLayer(
            "sol",
            tileset, 
            );

        const grass = carteDuNiveau.createLayer(
            "grass",
            tileset, 
            );

        const trees = carteDuNiveau.createLayer(
            "trees",  
            tileset,
        );

        sol.setCollisionByProperty({ collider: true });

        this.cameras.main.setSize(896, 448); 

        this.player = this.physics.add.sprite(64, 64, "hero")/*.setOrigin(128,128)*/;
        this.player.setCollideWorldBounds(true);
        this.physics.add.collider(this.player, sol);
        


        // définition des tuiles de plateformes qui sont solides
        // utilisation de la propriété estSolide

        /*this.physics.add.collider(
            this.player,
            sol,);
            

        collider.setCollisionByProperty({ collider: true });

        // ajout d'une collision entre le joueur et le calque plateformes

        this.physics.add.collider(this.player, collider);
        collider.setCollisionBetween(1, this.player);*/ 





        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('hero_sol_left', {start:0,end:3}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('hero_sol_right', {start:0,end:3}),
            frameRate: 10,
            repeat: -1
        });

        /*this.anims.create({
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
        });*/

        
        this.cameras.main.startFollow(this.player);
       
        
        
    }


    update(){


         
    }

    
}

