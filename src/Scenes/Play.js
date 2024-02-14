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
       

    //RUNNER AND ROCKS
        this.floorTile = this.add.tileSprite(0, 0, 1280, 960, 'floor').setOrigin(0,0) 
        
        this.p1 = new Runner(this, game.config.width/5, borderSize, 'running')
        this.p1.anims.play('running')

        this.rock01 = (new Rock(this, game.config.width, borderSize, 'rock')).setScale(0.12, 0.12)
        this.rock02 = (new Rock(this, game.config.width *1.5, borderSize * 2, 'rock')).setScale(0.12, 0.12)
        this.rock03 = (new Rock(this, game.config.width * 2 , borderSize * 3, 'rock')).setScale(0.12, 0.12)
        this.rock04 = (new Rock(this, game.config.width * 2.5, borderSize * 4, 'rock')).setScale(0.12, 0.12)
        

       
    //KEYBINDS (Make sure to copy paste the keybinds per scene - or at least the ones needed for the objects)
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        keyRESTART = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
     
     //SCORE FONT CONFIG
        this.p1Score = 0
     
        let scoreConfig = {
            fontFamily: "Impact",
            fontSize: '50px',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 500
    }

        let gameOverconfig = {
            fontFamily: 'Arial',
            fontSize: '100px',
            backgroundColor: '#000000',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 500
            

        }

     //GAME ON SWITCH
        this.gameOn = true
    
     //TIMER/SCORE
        this.zero = 0
        this.score =  Math.floor((this.zero += 1)/60)
        
        this.timer = this.add.text(game.config.width - 600, 20, this.score, scoreConfig).setOrigin(0,0)
        this.highScoreText = this.add.text(-150, 20, "High Score: " + highScore, scoreConfig).setOrigin(0,0)

       
    }

    update(){
        let gameOverconfig = {
            fontFamily: 'Arial',
            fontSize: '50px',
            backgroundColor: '#000000',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            
            

        }
       
       

        if(!this.gameOn && Phaser.Input.Keyboard.JustDown(keyRESTART)) {
            this.scene.restart()
            this.checkHighScore()
            
        }

        if(!this.gameOn && Phaser.Input.Keyboard.JustDown(keyENTER)) {
            this.scene.start('menuScene')
            this.checkHighScore()
            
        }
        if (!this.gameOn) {
            this.gg = this.add.text(game.config.width/2, game.config.height/2 -300, "GAME OVER!", gameOverconfig).setOrigin(0.5,0.5)
            this.gameOverText = this.add.text(game.config.width/2, game.config.height/2, "Press [R] to restart, or [ENTER] to return to the menu!", gameOverconfig).setOrigin(0.5,0.5)
            }

    //GAME OVER CHECK
       if (this.gameOn == true) {
        this.p1.update()
        this.rock01.update()
        this.rock02.update()
        this.rock03.update()
        this.rock04.update()
        this.floorTile.tilePositionX += 18
        
        this.score =  Math.floor((this.zero += 1)/60)
        this.timer.text = ("Score: " + this.score)
        
        //floor speed
        if (this.score >= 30) {
            this.floorTile.tilePositionX += 3
        
        //making the floor go left just to mess with players >:D
        if (this.score >= 45) {
            this.floorTile.tilePositionX -= 50
        }
      
       } 
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

    //MISC FUNCTIONS (COLLISION AND TIMER)
    checkCollision(runner, rock) {
        if (runner.x  < rock.x + (rock.width * 0.1) - 150 &&
            runner.x + (rock.width * 0.1) - 150 > rock.x &&
            runner.y < rock.y + (rock.height * 0.1) - 90 &&
            (rock.height * 0.1) - 90 + runner.y > rock.y) {
            return true
        }   else {
            return false
        }

        
    }

    checkHighScore() {
        if (this.score > highScore) {
            highScore = this.score
        }
    }

    

    
    
}