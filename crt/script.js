function imageToData(image) {
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  canvas.width = image.width;
  canvas.height = image.height;
  context.drawImage(image, 0, 0);
  return context.getImageData(0, 0, image.width, image.height);
}

function static(imgData) {
  var rand = 0;
  for (i=0; i<imgData.data.length; i+=4) {
    if (imgData.data[i]==0 && imgData.data[i+1]==128 && imgData.data[i+2]==0) {
      rand = 17*Math.floor(Math.random()*16);
      imgData.data[i] = rand;
      imgData.data[i+1] = rand;
      imgData.data[i+2] = rand;
    }
  }
  return imgData;
}

function draw() {
  out.putImageData(static(imageToData(crt)), 0, 0);
}

var out = document.getElementById("crt").getContext("2d");
var crt = new Image();
crt.src = "img/crt.png";

crt.onload = function() {
  var interval = setInterval(draw, 1000/24);
};
