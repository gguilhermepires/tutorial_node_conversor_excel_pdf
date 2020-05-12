const fs = require("fs");
/*
//escrita apagando o arquivo
fs.writeFile("./dado.gui","conteduo novo",(err)=>{
    if(err)
        console.log("Erro ao escrever o arquivo",err);
        else
        console.log("salvo com sucesso");
})


// leitura
fs.readFile("./dado.gui",{encoding:'utf-8'},(erro,dados)=>{
    if(erro)
    console.log("falha durante a leitura do arquivo");
    else{
        console.log(dados);
    }
})*/


fs.readFile("./usuario.json", { encoding: "utf-8" }, (erro, dados) => {
    if (erro) {
        console.log("Erro na leitura");
    }else{
        var conteudo = JSON.parse(dados);
        console.log(conteudo);
        conteudo.nome = "novo";
        console.log(conteudo);
     
        fs.writeFile("./usuario.json",JSON.stringify(conteudo),(erro)=>{
            if(erro)
            console.log("Erro ao escrever");
            else
            console.log("escrito");
            
        })
    }
});


function modificarUsuario(nome,curso,categoria){
    fs.readFile("./usuario.json", { encoding: "utf-8" }, (erro, dados) => {
        if (erro) {
            console.log("Erro na leitura");
        }else{

            var conteudo = JSON.parse(dados);

            conteudo.nome = nome;
            conteudo.curso = curso;
            conteudo.categoria = categoria;

            fs.writeFile("./usuario.json",JSON.stringify(conteudo),(erro)=>{
                if(erro)
                console.log("Erro ao escrever");
                else
                console.log("escrito");
                
            })
        }
    });
}
modificarUsuario("nome","curso","categoria")