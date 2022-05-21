let file = document.querySelector('#file');

function readFile(e) {
    let file = e.target.files[0];
   
    if(file.type === "text/plain") 
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
}

file.addEventListener('change', readFile, false);
