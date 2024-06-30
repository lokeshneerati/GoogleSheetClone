const download = document.getElementById("download");
const upload = document.getElementById("upload");

download.addEventListener("click", () => {
    const blob = new Blob([
        JSON.stringify(state)],
        {

            type: "application/json",
        },
    );
    const url = URL.createObjectURL(blob);
    let link  = document.createElement("a");
    link.href = url;
    link.download = "spreadsheet.json";
    link.click();
    
});

upload.addEventListener("change", (event) => { 
    let file = event.target.files[0];
    if(file.type !== "application/json") {
        alert("Please upload json file only");
        return;
    }
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
        const fileData = JSON.parse(event.target.result);
        console.log(fileData);
    };
    fileReader.readAsText(file);

});