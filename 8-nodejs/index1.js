import express from "express"

const app = express()

app.get("/", (req,res)=>{
    res.send("<p>Servidor Criado!</p>")
})


app.get("/NovaRota",(req,res)=>{
    res.send("<h1 style= 'color: #0000FF'>Nova rota criada com sucesso</h1>")
})

app.get("/usuario/:nome", (req,resp)=>{
    resp.send("<h1>Exemplos de Rota</h1><p style= 'color: #00FF00' >Valor do parâmetro passado: "+ req.params.nome + "</p>")
})






app.listen(3000,()=>{
    console.log("Servidor iniciado na porta 3000")
})

