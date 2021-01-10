var gameWindow = document.getElementById("gameWindow");
var ctx = gameWindow.getContext("2d");

var snekTiles = new Image();
snekTiles.src = "https://azealot.github.io/snek/snek.png";

//

var fps = 4;
function animate() {
setTimeout(function() {
  requestAnimationFrame(animate);
  ctx.drawImage(snekTiles,16,16);
}, 1000 / framesPerSecond);
}
