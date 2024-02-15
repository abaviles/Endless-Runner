class Runner extends Phaser.GameObjects.Sprite {
    constructor (scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)

        scene.add.existing(this)

    }
    
    preload() {
        
    }

    create(){
       this.runner = game.add.sprite(this.x, this.y, 'lamao')
       this.tp = game.add.sprite(this.x, this.y, 'TP')
       
       this.gameOn = false
    }


    update(){
             
        //CONTROLS
        if (keyDOWN.isDown && this.y <= game.config.height - borderSize) {
            this.y += 15 
        } else if (keyUP.isDown && this.y >= borderSize) {
            this.y -= 15 
        } else if (keyLEFT.isDown && this.x >= 0) {
            this.x -= 20 
        } else if (keyRIGHT.isDown && this.x <= game.config.width - borderSize) {
            this.x += 9       
        }  
        else if (this.x <= game.config.width && this.x >= 0) {
            this.x -= 3
        }  

        
    } 


}
