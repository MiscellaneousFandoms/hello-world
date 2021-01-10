var gameWindow = document.getElementById("gameWindow");
var ctx = gameWindow.getContext("2d");
var snekTiles = new Image();
snekTiles.src = "/snek/snek.png";

ctx.fillRect(100, 100, 100, 100);
ctx.drawImage(snekTiles,8,8);
