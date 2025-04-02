function loadFile() {
  // Získať vybraný súbor
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];
  const workArray = [];
  const germanWords = [];

  // Ak nie je vybraný žiadny súbor, zobrazí sa upozornenie
  if (!file) {
    alert(
      `Please click on the button "Select file" and confirm it with button "Load file"`
    );
    return;
  }

  // Vytvorenie FileReader objektu na načítanie súboru
  const reader = new FileReader();

  // Po načítaní súboru, spracovať jeho obsah
  reader.onload = function (event) {
    const fileContent = event.target.result;
    console.log(fileContent); // Výpis obsahu do konzoly

    // Zobraziť obsah súboru v HTML (napríklad v <div id="fileContent">)
    document.getElementById("fileContent").innerText = fileContent;
  };

  // Načítať súbor ako text
  reader.readAsText(file);
}
