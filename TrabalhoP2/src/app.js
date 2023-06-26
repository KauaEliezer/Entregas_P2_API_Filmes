import express from 'express'

import Veiculo  from './models/Veiculo.js'

const app = express()

//app.use(express.json())
app.use(express.urlencoded());

app.get('/', (req, res ) => {
    res.status(200).render('../src/views/index.pug')
})
 
app.get('/veiculos', async (req, res) => {
    const veiculosList = await Veiculo.findAll()
    //console.log(veiculosList)
    res.status(200).render('../src/views/veiculo/list.pug',{
        veiculosList: veiculosList
    })
})

app.get('/veiculos/form', (req, res) => {
    res.status(200).render('../src/views/veiculo/form.pug')
})

app.post('/veiculos/criar', (req, res) => {
    //console.log(req.body)
    Veiculo.create(req.body)
    res.redirect('/veiculos')
})

app.get('/veiculos/deletar/:id', async (req, res) => {
    //console.log('ola')
    let {id} = req.params
    let index = await buscaVeiculo(id)
    //console.log(index.dataValues.id)
    //Veiculo.destroy(index.dataValues.id, id)
    Veiculo.destroy({
        where: { id: index.dataValues.id },
      });
    res.redirect('/veiculos')
})

app.get('/veiculos/alteracao/:id', async (req, res) => {
    let index = await buscaVeiculo(req.params.id)

    //console.log(veiculosList)
    res.status(200).render('../src/views/veiculo/form_alt.pug',{
        index: index
    })
})

app.put('/veiculos/alterar/:id', async (req, res) => {
    
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


const buscaVeiculo = (id) => {
    return Veiculo.findByPk(id)
}

export default app