class Controls extends Phaser.Scene {
    constructor() {
        super('controlsScene')
    }
    create(){
        //MENU CONFIG
        this.add.tileSprite(0, 0, 1280, 960, 'controlsBG').setOrigin(0,0)
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
        
            this.cameras.main.fadeIn(1000, 0, 0, 0)

            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.time.delayedCall(1000, () => {
                    this.scene.start('controlsScene')
                })
            })
    }
    


    update(){
        if (Phaser.Input.Keyboard.JustDown(keyENTER)){
             this.cameras.main.fadeOut(1000, 0, 0, 0)
             this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
             this.scene.start('playScene')})
             }
     
     }
}