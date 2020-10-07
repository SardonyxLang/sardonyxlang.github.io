const converter = new showdown.Converter();

document.getElementById('md').innerHTML = converter.makeHtml(document.getElementById('md').textContent);