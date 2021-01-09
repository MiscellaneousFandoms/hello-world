var i = 0;
var x = 0;
var y = 0;

var gameWindow = document.getElementById("gameWindow");
var ctx = gameWindow.getContext("2d");
var snekTiles = new Image();
snekTiles.src = "/snek/snek.png";

var snek = [[0,0],[1,0]];
var apple = [10,10];

var keys = [];
document.addEventListener('keydown', function (event) {
  if (event.key === 'w') {
    keys[0] = 1;
  }
  if (event.key === 'a') {
    keys[1] = 1;
  }
  if (event.key === 's') {
    keys[2] = 1;
  }
  if (event.key === 'd') {
    keys[3] = 1;
  }
});
document.addEventListener('keyup', function (event) {
  if (event.key === 'w') {
    keys[0] = 0;
  }
  if (event.key === 'a') {
    keys[1] = 0;
  }
  if (event.key === 's') {
    keys[2] = 0;
  }
  if (event.key === 'd') {
    keys[3] = 0;
  }
});

ctx.fillRect(100, 100, 100, 100);
ctx.drawImage(snekTiles,8,8);

var fps = 4;
function animate() {
setTimeout(function() {
  requestAnimationFrame(animate);
  
  if (snek[snek.length-2][0] != snek[snek.length-1][0]) {
    let x = 2*snek[snek.length-1][0]-[snek.length-2][0];
    let y = keys[0]-keys[2];
    snek.push([x,y]);
  } else {
    let x = keys[3]-keys[1];
    let y = 2*snek[snek.length-1][1]-[snek.length-2][1]
    snek.push([x,y]);
  }
  if (snek[2*snek.length-1] != apple) {
    snek.shift();
  }
  
  for (i = 0; i < snek.length; i++) {
    let x = 8*snek[snek.length+i][0];
    let y = 8*snek[snek.length+i][1];
    ctx.drawImage(snekTiles,16,0,8,8,x,y,8,8);
  }
}, 1000 / framesPerSecond);
}
