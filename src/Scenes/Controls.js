class Controls extends Phaser.Scene {
    constructor() {
        super('controlsScene')

      
    }
    

    
    create(){
        this.button = false
        //MENU CONFIG
        this.add.tileSprite(0, 0, 1280, 960, 'controlsBG').setOrigin(0,0)
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
        
            this.cameras.main.fadeIn(3000, 0, 0, 0)

            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.time.delayedCall(1000, () => {
                    this.scene.start('controlsScene')
                })
            })
    }
    


    update(){
        if (Phaser.Input.Keyboard.JustDown(keyENTER) && !this.button){
             this.button = true
             this.sound.play('steps')
             this.sound.play('charge', {volume: 0.3})
             this.cameras.main.fadeOut(4000, 0, 0, 0)
             this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
             this.scene.start('playScene')
             })
             }
     
     }
}