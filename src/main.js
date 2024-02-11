let config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 960,
    scene: [Menu, Play]
}

let keyUP, keyDOWN, keyLEFT, keyRIGHT, keyENTER, keySPACE
let game = new Phaser.Game(config)
let borderSize = game.config.height / 5
