import express from "express"
import path from "path" //
import { fileURLToPath } from "url" //Ajuda a criar caminhos dinâmicos no projeto

const __dirname = path.dirname(fileURLToPath(import.meta.url))// fileURL faz uma indiçacao para pastas indeternas dentro das estruturas, que irao ser criados scripts que serao manipulados pelo node.js apos passarmos os parametros


const app = express()

app.get("/", (req, res )=>{
    res.sendFile("public/index.html",  {root : __dirname})           //Ira ser feito um envio de um arquivo inteiro atraves de um diretorio nao apenas de um texto

})


//**app.get("/", (req,res)=>{
    //res.send("<p>Servidor Criado!</p>")//
//})**//


app.get("/NovaRota",(req,res)=>{
    res.send("<h1 style= 'color: #0000FF'>Nova rota criada com sucesso</h1>")
})



app.get("/usuario/:nome", (req,resp)=>{
    resp.send("<h1>Exemplos de Rota</h1><p style= 'color: #00FF00' >Valor do parâmetro passado: "+ req.params.nome + "</p>")
})



app.get("/user2", (req,resp)=>{
    resp.send("<h1>Envio de usuário por get</h1>  <a href= '/view-usuario?nomeUsuario=Mauro'>VIEW</a>")
})



app.get("/view-usuario", (req,resp)=>{
    
    let nmUser= req.query.nomeUsuario
    
    resp.send(`<h1> Parametro recebido através de envio por GET</h1><p>Usuário : ${nmUser} </p>`)
})


app.listen(3000,()=>{
    console.log("Servidor iniciado na porta 3000")
})

