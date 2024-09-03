const container = document.querySelector(".container");

window.addEventListener("mousemove", (e) => {
  container.innerHTML = `
          <div class="mouse_position">
            ${e.clientX}
            <h4>Mouse X Position(px)</h4>
        </div>
        <div class="mouse_position">
            ${e.clientY}
            <h4>Mouse Y Position(px)</h4>
        </div>`;
});

window.addEventListener("mouseout", (e) => {
  console.log(e);
  container.innerHTML = `
    <div class="mouse_position">
      Nan
      <h4>Mouse X Position(px)</h4>
  </div>
  <div class="mouse_position">
      Nan
      <h4>Mouse Y Position(px)</h4>
  </div>`;
});
