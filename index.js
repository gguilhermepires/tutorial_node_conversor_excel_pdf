//npm install ejs --save
//npm install html-pdf --save

const fs = require("fs");

var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var Writer = require("./Writer");
var PDFWriter = require("./PDFWriter");

async function main() {

    var leitor = new Reader();
    var escritor = new Writer();

    var caminho = "./planilha.csv";
    var caminhoEscrita = "./meuHtml.html";
    var caminhoPDF = "./meuPDF.pdf";

    var dados = await leitor.Read(caminho);

    var dadosProcessados = Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);

    console.log(usuarios.RowCount);
    usuarios.rows.push(["teste", "teste", "teste", "teste"])
    console.log(usuarios.RowCount);

    var html = await HtmlParser.Parse(usuarios);

    var resultado = escritor.Write(caminhoEscrita, html);

    if (resultado)
        console.log("Página html gerada");
    else
        console.log("Não foi possível gerar página html");

      PDFWriter.WritePDF(caminhoPDF,html)
}

main();