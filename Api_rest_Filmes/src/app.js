import express from 'express'

const app = express()

app.use(express.json())

const filmes = [
    {id:1, 'titulo': 'Harry Potter'},
    {id:2, 'titulo': 'Vingadores'},
    {id:3, 'titulo': 'Velozes e Furiosos'},
]

const series = [
    {id:4, 'titulo': 'Mandalorian'},
    {id:5, 'titulo': 'La casa de papel'},
    {id:6, 'titulo': 'Greys Anatomy'},
]

app.get('/', (req, res ) => {
    res.status(200).send(`IteFlix Online.
                        Olá, eu sou a primeira pagina.`)
})
 
app.get('/series', (req, res) => {
    res.status(200).json(series)
})

app.get('/series/:id', (req, res) => {
    let index = buscaSerie(req.params.id)
    res.json(series[index])
})

app.post('/series', (req, res) => {
    series.push(req.body)
    res.status(201).send('Serie cadastrada com sucesso')
})
//passar por parametro o id que vem da requisição
app.put('/series/:id', (req, res) => {
    let index = buscaSerie(req.params.id)

    series[index].titulo = req.body.titulo
    res.json(series)
})

app.delete('/series/:id', (req, res) => {
    let {id} = req.params
    let index = buscaSerie(id)
    series.splice(index,1)
    res.send(`Serie ${id} removida com sucesso`)
})

function buscaSerie(id){
    return series.findIndex(serie => serie.id == id)
}


//-----

app.get('/filmes', (req, res) => {
    res.status(200).json(filmes)
})

app.get('/filmes/:id', (req, res) => {
    l
    let index = buscaFilmes(req.params.id)
    res.json(filmes[index])
})

app.post('/filmes', (req, res) => {
    filmes.push(req.body)
    res.status(201).send('Filme cadastrado com sucesso')
})

app.put('/filmes/:id', (req, res) => {
    let index = buscaFilmes(req.params.id)

    filmes[index].titulo = req.body.titulo
    res.json(filmes)
})

app.put('/filmes/:id', (req, res) => {
    let index = buscaFilmes(req.params.id)

    filmes[index].titulo = req.body.titulo
    res.json(filmes)
})

app.delete('/filmes/:id', (req, res) => {
    let {id} = req.params
    let index = buscaFilmes(id)
    filmes.splice(index,1)
    res.send(`Filme ${id} removido com sucesso`)
})

function buscaFilmes(id){
    return filmes.findIndex(filme => filme.id == id)
}

export default app