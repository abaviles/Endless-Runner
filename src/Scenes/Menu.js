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

        this.load.spritesheet('TP', './assets/lamao_teleport.png', {
            frameWidth: 150,
            frameHeight: 150,
            startFrame: 0,
            endFrame: 3
        })

        this.load.image('floor', './assets/floor_tile.png')
        this.load.image('rock','./assets/crystal.png')
        this.load.image('menuBG', './assets/menuScreen.png')
        this.load.image('controlsBG', './assets/controls.png')
        this.load.image('creditsBG', './assets/credits.png')
        
        //AUDIO
        this.load.audio('teleportNoise', './assets/teleport.wav')
        this.load.audio('steps', './assets/steps.wav')
        this.load.audio('charge', './assets/charge.ogg')
        this.load.audio('coin', './assets/coin.flac')
        this.load.audio('wind', './assets/wind.wav')

        this.load.audio('playMusic', './assets/playMusic.mp3')
        this.load.audio('menuMusic', './assets/menuMusic.mp3')


        
    }

    create(){
        //BOOL SWITCH FOR AUDIO AND TRANSITION
        this.button = false
        
        //TRANSITION
        this.cameras.main.fadeIn(3000, 0, 0, 0)
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.time.delayedCall(500, () => {
                    this.scene.start('menuScene')
                })
            })

       
        //MENU MUSIC 
        this.menu = this.sound.add('menuMusic')
        this.menu.loop = true;
        this.menu.play()

        //SPRITE ANIMATION
        this.anims.create({
            key: 'running',
            frames: this.anims.generateFrameNumbers('lamao', 
            {start: 0, end: 3, first: 0}),
            frameRate: 12,
            repeat: -1
        })

        //TP ANIMATION
        this.anims.create({
            key: 'teleport',
            frames: this.anims.generateFrameNumbers('TP',
            {start: 0, end: 3, first: 0}),
            frameRate: 30,
            repeat: 0
        })

        //MENU CONFIG
        this.add.tileSprite(0, 0, 1280, 960, 'menuBG').setOrigin(0,0)

       //KEYBINDS
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)

       
    }

    update(){
       if (Phaser.Input.Keyboard.JustDown(keyENTER) && !this.button){
            this.button = true
            this.sound.play('coin')
            this.cameras.main.fadeOut(1000, 0, 0, 0)
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.menu.stop()
            this.scene.start('controlsScene')})
            }

        if (Phaser.Input.Keyboard.JustDown(keyLEFT) && !this.button){
            this.button = true
            this.sound.play('coin')
            this.cameras.main.fadeOut(1000, 0, 0, 0)
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.menu.stop()
            this.scene.start('creditScene')})
            }

       
}
}