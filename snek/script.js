var gameWindow = document.getElementById("gameWindow");
var ctx = gameWindow.getContext("2d");

var snekTiles = new Image();
snekTiles.src = "https://azealot.github.io/snek/snek.png";

//

var i;
for (i = 0; i < 100; i++) {
  ctx.drawImage(snekTiles,16,16);
} 
