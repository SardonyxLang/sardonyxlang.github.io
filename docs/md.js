window.onload = () => {
    const converter = new showdown.Converter();

    let text = converter.makeHtml(document.getElementById('md').innerText);

    document.getElementById('md').innerHTML = text;
}