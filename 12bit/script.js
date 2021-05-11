document.getElementById("in").onload = function() {
  var c = document.getElementById("out");
  var ctx = c.getContext("2d");
  var img = document.getElementById("in");
  ctx.drawImage(img, 0, 0);
  var imgData = ctx.getImageData(0, 0, img.width, img.height);
  // invert colors
  var g = 255/15;
  for (i=0; i<imgData.data.length; i+=1) {
    imgData.data[i] = Math.round(imgData.data[i]/g)*g;
  }
  ctx.putImageData(imgData, 0, 0);
};
