await sleep(1000);

var gameWindow = document.getElementById("gameWindow");
var ctx = gameWindow.getContext("2d");

var snekTiles = new Image();
snekTiles.src = "https://azealot.github.io/snek/snek.png";

//

ctx.drawImage(snekTiles,16,16);
