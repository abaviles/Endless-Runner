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
        this.x -= 20
        this.score =  Math.floor((this.zero += 1)/60)
        
        if (this.score >= 15) {
            this.x -= 3
        } else if (this.score >= 30) {
            this.x -= 4
        } else if (this.score >= 45) {
            this.x -= 5 }
       

        if (this.x <= 0) {
            this.x = (Math.random() * 1500) + game.config.width
            } else if (this.x <= 0 && this.score >= 30) {
                this.x = (Math.random() * 1000) + game.config.width 
            } else if (this.x <= 0 && this.score >= 40) {
                this.x = (Math.random() * 200) + game.config.width }
            
    }
}