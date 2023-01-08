
const xlsxj = require("xlsx-to-json");

exports.generateJson = (excelFile, sheetName, tojsonFilename) => {

    xlsxj({
        input: excelFile,
        output: tojsonFilename,
        sheet: sheetName
    }, (err, res) => {
        if (err) {
            console.log("File created");
        } else {
            // console.log("Failed to create file");
        }
    })
}