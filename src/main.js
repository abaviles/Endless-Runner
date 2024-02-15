let config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 960,
    scene: [Menu, Controls, Credits, Play]
}

let keyUP, keyDOWN, keyLEFT, keyRIGHT, keyENTER, keySPACE, keyRESTART
let game = new Phaser.Game(config)
let borderSize = game.config.height / 5
let highScore = 0

/* 

Name: Adam Aviles
Game: "Crystal Cruise"
Hours: ~ 24 hrs.
Creative "Tilt": In game, I implemented a teleport mechanic full with an animation I made


REFLECTION!
I am actually really proud of this game! Obviosuly not polished to the max but for the time given, I honestly didn't think I would make something remotely
playable. I went out of my way to research how to do scene transitions and volume adjustments, but the one thing I was proud of was getting my teleport
function to work properly. I struggled having basically two animations play at the same time, but eventually made it work after hours of experimentation (I
think I spent way too long for such a simple solution but it is what it is).



Sources:
https://abaviles.github.io/Rocket-Patrol-MODS/ - General Game setup / programming reference

https://freesound.org/people/plasterbrain/sounds/608433/ - SFX website

https://blog.ourcade.co/posts/2020/phaser-3-fade-out-scene-transition/ - Transition techniques

https://stackoverflow.com/questions/51601926/how-to-set-volume-in-phaser-3 - Volume adjustments

https://pixabay.com/music/search/action/?pagi=3 - Music source
*/
