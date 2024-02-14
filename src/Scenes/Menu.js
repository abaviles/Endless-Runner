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
        this.load.image('menuBG', './assets/menuScreen.png')
        this.load.image('controlsBG', './assets/controls.png')


        
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

        //MENU CONFIG
        this.add.tileSprite(0, 0, 1280, 960, 'menuBG').setOrigin(0,0)

        

       //KEYBINDS
       keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
    }

    update(){
       if (Phaser.Input.Keyboard.JustDown(keyENTER)){
            this.cameras.main.fadeOut(1000, 0, 0, 0)
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start('controlsScene')})
            }
    
    }
}