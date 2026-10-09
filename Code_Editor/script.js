function run() {
  let html = document.getElementById('html-code').value
  let css = document.getElementById('css-code').value
  let js = document.getElementById('js-code').value
  let outPut = document.getElementById('output')

  outPut.contentDocument.body.innerHTML =
    htmlCode + '<style>' + cssCode + '</style>'
}
