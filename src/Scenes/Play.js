class Play extends Phaser.Scene {
    constructor(x, y) {
        super('playScene', x, y)
    }
    preload() {
        this.load.spritesheet('lamao', './assets/lamao_spritesheet.png', {
            frameWidth: 150,
            frameHeight: 150,
            startFrame: 0,
            endFrame: 3
        })
    }

    create(){ 

    //GAME ON SWITCH
        this.gameOn = true

    //FLOOR
        this.floorTile = this.add.tileSprite(0, 0, 1280, 960, 'floor').setOrigin(0,0) 

    //RUNNER AND ROCKS
        this.p1 = new Runner(this, game.config.width/5, game.config.height/2, 'running')
        this.p1.anims.play('running').setScale(1, 1)

        this.rock01 = (new Rock(this, game.config.width, borderSize, 'rock')).setScale(0.1, 0.1)
        this.rock02 = (new Rock(this, game.config.width *1.5, borderSize * 2, 'rock')).setScale(0.1, 0.1)
        this.rock03 = (new Rock(this, game.config.width * 2 , borderSize * 3, 'rock')).setScale(0.1, 0.1)
        this.rock04 = (new Rock(this, game.config.width * 2.5, borderSize * 4, 'rock')).setScale(0.1, 0.1)

       
    //KEYBINDS (Make sure to copy paste the keybinds per scene - or at least the ones needed for the objects)
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
       
        
       
    }

    update(){

        if(!this.gameOn && Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            this.scene.restart()
        }

        if(!this.gameOn && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.scene.start('menuScene')
        }
    
    //GAME OVER CHECK
       if (this.gameOn == true) {
        this.p1.update()
        this.rock01.update()
        this.rock02.update()
        this.rock03.update()
        this.rock04.update()
        this.floorTile.tilePositionX += 20        
       }

    //COLLISION CHECK
       if (this.checkCollision (this.p1, this.rock01)) {
            this.gameOn = false }
       if (this.checkCollision (this.p1, this.rock02)) {
            this.gameOn = false }
       if (this.checkCollision (this.p1, this.rock03)) {
            this.gameOn = false }
       if (this.checkCollision (this.p1, this.rock04)) {
            this.gameOn = false }    
    }

    checkCollision(runner, rock) {
        if (runner.x  < rock.x + (rock.width * 0.1) - 150 &&
            runner.x + (rock.width * 0.1) - 150 > rock.x &&
            runner.y < rock.y + (rock.height * 0.1) - 110 &&
            (rock.height * 0.1) - 110 + runner.y > rock.y) {
            return true
        }   else {
            return false
        }
    }
    

    
    
}