var pdf = require("html-pdf");

class PDFWriter {
    static WritePDF(fileName, html) {
        console.log("Gerando pdf ...");
        
        pdf.create(html, {}).toFile(fileName, (err) => {
            if (err)
                console.log("erro ao gerar PDF");
            else
                console.log("PDF gerado");
        });
    }
}
module.exports = PDFWriter;