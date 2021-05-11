document.getElementById("in").onload = function() {
  var c = document.getElementById("out");
  var ctx = c.getContext("2d");
  var img = document.getElementById("in");
  ctx.drawImage(img, 0, 0);
  var imgData = ctx.getImageData(0, 0, img.width, img.height);
  // invert colors
  var g = 255/15;
  for (i=0; i<imgData.data.length; i+=4) {
    imgData.data[i] = Math.round(imgData.data[i]/g)*g;
    imgData.data[i+1] = Math.round(imgData.data[i+1]/g)*g;
    imgData.data[i+2] = Math.round(imgData.data[i+2]/g)*g;
    imgData.data[i+3] = Math.round(imgData.data[i+3]/g)*g;
  }
  ctx.putImageData(imgData, 0, 0);
};
