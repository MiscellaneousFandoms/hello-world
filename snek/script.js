var gameWindow = document.getElementById("gameWindow");
var ctx = gameWindow.getContext("2d");

var snekTiles = new Image();
snekTiles.src = "/snek/snek.png";

ctx.drawImage(snekTiles,8,8);
