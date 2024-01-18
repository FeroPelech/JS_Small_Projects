const container = document.getElementById("container");

window.addEventListener("keypress", (element) => {
  console.log(element);
  container.innerHTML = `
    <div class="key">
        ${element.key === " " ? "Space" : element.key}
        <small>event.key</small>
    </div>
    <div class="key">
        ${element.keyCode}
        <small>event.keyCode</small>
    </div>
    <div class="key">
        ${element.code}
        <small>event.code</small>
    </div>
  `;
});
