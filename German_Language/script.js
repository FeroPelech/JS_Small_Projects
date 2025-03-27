const container = document.querySelector(".container");
import { readFile } from "F:GitHubRepoJS_Small_ProjectsGerman_LanguagesrcSlovnikDE-Telo.txt";

readFile("SlovnikDE-Telo.txt", (err, data) => {
  if (err) throw err;

  console.log(data.toString());
});
