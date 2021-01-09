var i = 0;

var keys = []
document.addEventListener('keydown', keydown (event)) {
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
document.addEventListener('keydown', keyup (event)) {
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

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var img = snek.png;
// ctx.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);

var snek = [[0,0],[1,0]];
var apple = [10,10]

var fps = 4;
function animate() {
setTimeout(function() {
  requestAnimationFrame(animate);
  
  if (snek[snek.length-2][0] != snek[snek.length-1][0]) {
    snek.push([2*snek[snek.length-1][0]-[snek.length-2][0],keys[0]-keys[2]]);
  } else {
    snek.push([keys[3]-keys[1],2*snek[snek.length-1][1]-[snek.length-2][1]]);
  }
  if (snek[2*snek.length-1] != apple) {
    snek.shift();
  }
  
  for (i = 0; i < snek.length; i++) {
    ctx.drawImage(img,16,0,8,8,8*snek[snek.length+i][0],8*snek[snek.length+i][1],8,8);
  }
}, 1000 / framesPerSecond);
}
