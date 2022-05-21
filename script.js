let file = document.querySelector('#file');

function read(file) 
{    
    let reader = new FileReader();

    reader.onload = function (e) 
    {
        let content = e.target.result;
        console.log(content);
        //console.log(e);
    }
    reader.readAsText(file);
}


function readFile(e) 
{
    for(let x = 0; x < e.target.files.length; x++) {
        read(e.target.files[x]);
    }
}

file.addEventListener('change', readFile, false);
