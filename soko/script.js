var game = document.getElementById("game");
game.width = 512;
game.height = 288;
var ctx = game.getContext("2d");

//images
var player = new Image();
player.src = "img/player.png";
var tiles = new Image();
tiles.src = "img/tiles.png";

/*key reading
arrow keys    z  r
    38        90 82
 37 40 39
 check https://keycode.info/ if more controlls needed.*/
window.addEventListener("keydown", keysPressed, false);
window.addEventListener("keyup", keysReleased, false);
var key = Array(222).fill(0);
var keytoggle = Array(222).fill(0);
function keysPressed(e) {
	key[e.keyCode] = 1;
  if (key[39]&&!key[37]) {
		player[0][2]=0;
    if (puzzle[player[0][1]][player[0][0]+1]!=1) {
      player[0][0]=player[0][0]+1;
      player[0][3]=0;
    } else {
      player[0][3]=1;
    }
  }
	if (key[38]&&!key[40]) {
		player[0][2]=1;
		if (puzzle[player[0][1]-1][player[0][0]]!=1) {
			player[0][1]=player[0][1]-1;
			player[0][3]=0;
    } else {
      player[0][3]=1;
		}
	}
	if (key[37]&&!key[39]) {
		player[0][2]=2;
		if (puzzle[player[0][1]][player[0][0]-1]!=1) {
			player[0][0]=player[0][0]-1;
			player[0][3]=0;
    } else {
      player[0][3]=1;
		}
	}
	if (key[40]&&!key[38]) {
		player[0][2]=3;
		if (puzzle[player[0][1]+1][player[0][0]]!=1) {
			player[0][1]=player[0][1]+1;
			player[0][3]=0;
    } else {
      player[0][3]=1;
		}
	}
}
function keysReleased(e) {
	key[e.keyCode] = 0;
	if (!(key[39]||key[38]||key[37]||key[40])) {
		player[0][3]=0;
	}
}

//displays room data
function readroom() {
  for (y=0; y<puzzle.length; y++) {
    for (x=0; x<puzzle[y].length; x++) {
      ctx.drawImage(tiles,0,16*puzzle[y][x],16,16,16*x,16*y,16,16);
    }
  }
}

var room=1;
var puzzle=[];
var loaded=0;
var then;
function frame() {
  then = Date.now();
  ctx.clearRect(0,0,game.width,game.height);

  if (room==1) {
    if (!loaded) {
      player=[[1,2,3,0]];
      puzzle=[
        [0,0,1,1,1,1,1],
        [1,1,1,2,2,2,1],
        [1,2,2,2,2,2,1],
        [1,1,1,2,2,2,1],
        [1,2,1,1,2,2,1],
        [1,2,1,2,2,2,1,1],
        [1,2,2,2,2,2,2,1],
        [1,2,2,2,2,2,2,1],
        [1,1,1,1,1,1,1,1]];
      loaded=1;
    }
    readroom();
		ctx.drawImage(player,16*player[0][3],16*player[0][2],16,16,16*player[0][0],16*player[0][1],16,16);
  }

  setTimeout(frame, (1000/60)-(Date.now()-then));
}
frame();
