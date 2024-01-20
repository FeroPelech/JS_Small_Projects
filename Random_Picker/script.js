const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
});

function createTags(a) {
  const tags = a
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
}
