class Rock extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)

        scene.add.existing(this)
        this.moveSpeed = 20
    }

    update(){
        this.x -= this.moveSpeed

        if (this.x <= 0) {
            this.x = (Math.random() * 3000) + game.config.width
            
        }
    }
}