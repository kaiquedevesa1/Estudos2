var http = require("http")

http.createServer(function(request, response){

    response.writeHead(200,{"Content-Type" : "text/plain"})

    response.end("Ola Mundo!")

}).listen(8000, "127.0.0.1")

console.log("Servidor Web Executando em http://127.0.0.1:8000")