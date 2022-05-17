let file = document.querySelector('#file');

function readFile(e) {
    let file = e.target.files[0];
    console.log(file);
}

file.addEventListener('change', readFile, false);
