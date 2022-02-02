const text = document.getElementById("text");
text.focus();
let content = text.innerHTML;
text.value = null;
text.value = content;

function resize() {
  text.style.height = "";
  text.style.height = text.scrollHeight + "px";
}

resize();
