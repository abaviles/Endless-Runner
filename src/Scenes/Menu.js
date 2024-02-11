class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene')
    }

    preload() {
        this.load.spritesheet('lamao', './assets/lamao_spritesheet.png', {
            frameWidth: 150,
            frameHeight: 150,
            startFrame: 0,
            endFrame: 3
        })

        this.load.image('floor', './assets/floor_tile.png')
        this.load.image('rock','./assets/crystal.png')
        


        
    }

    create(){
        //SPRITE ANIMATION
        this.anims.create({
            key: 'running',
            frames: this.anims.generateFrameNumbers('lamao', 
            {start: 0, end: 3, first: 0}),
            frameRate: 12,
            repeat: -1
        })

        

       //KEYBINDS
       keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
    }

    update(){
       if (Phaser.Input.Keyboard.JustDown(keyENTER)){
            console.log('exiting Menu')
            this.scene.start('playScene')
        }       
    
    }
}