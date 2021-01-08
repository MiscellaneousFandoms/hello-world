var fps = 10;
function animate() {
  setTimeout(function() {
    requestAnimationFrame(animate);
    
  }, 1000 / framesPerSecond);
}
