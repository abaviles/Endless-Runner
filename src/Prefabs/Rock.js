class Rock extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)

        scene.add.existing(this)
       

        this.zero = 0
        this.score =  Math.floor((this.zero += 1)/60)
    }

    create(){
        this.add.sprite(this.x, this.y, 'rock').setInteractive(this.input.makePixelPerfect());
    }

    update(){
        this.x -= 18
        
        this.score =  Math.floor((this.zero += 1)/60)
        if (this.score >= 30) {
            this.x -= 3
        } 
       

        if (this.x <= 0) {
            this.x = (Math.random() * 2000) + game.config.width
            
        }
    }
}