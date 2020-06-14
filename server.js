// usei o express para criar e configurar meu servidor
const express = require("express")
const server = express()


// configurar arquivos estáticos (css, cripts, imagens)
server.use(express.static("public"))


//  configuração Nunjucjs

const nunjucks = require("nunjucks")
nunjucks.configure("views", {
express: server,
noCache: true,
})


// criei uma rota 
// e capturo o pedido do cliente para responder
server.get("/", function(req,res){
    return res.render("index.html")
})

server.get("/ideias", function(req,res){
    return res.render("ideias.html")

})
// Liguei meu servidor na porta 3000
// npm i nodemon monitoramento do node
server.listen(3000)


