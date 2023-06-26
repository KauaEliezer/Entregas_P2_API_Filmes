import app from "./app.js"

//const http = require("http")

//ou a porta é a constante que identifica a porta sendo escutada
//ou na porta 3000 (fizemos uma condição atraves do pipe)
const porta = process.send.PORT || 3000;


//aqui iremos criar o objeto com nossas rotas
// const rotas = {
//     '/': 'Servidor Online',
//     '/filmes': 'Listagem de Filmes',
//     '/series': 'Listagem de Series',
// }


// const server = http.createServer((req, res) => {
// //montara um cabeçalho, retornará um status e o tipo de conteudo que está passando
//     res.writeHead(200, {'Content-Type' : 'text/plain'})
// //finalizando a resporta com o que eu quero mandar
//     res.end("Sua requisicao foi contemplada com sucesso")
// })


//fazer o link, qual a porta precisará ser escutada
app.listen(porta, () =>{
    console.log(`Servidor Online, em http://localhost:${porta}`)
})