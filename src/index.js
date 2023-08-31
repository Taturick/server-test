const express = require('express');
const path = require('path'); // Importe o módulo 'path'

const app = express();

const usuarios =[
    {id: 1, nome: "Ricardo", idade: 39},
    {id: 2, nome: "Tatu", idade: 40},
    {id: 3, nome: "Edson", idade: 43},
    {id: 4, nome: "Francis", idade: 41}
    
]

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'pagina1.html')); // Envia a página 1
});

app.get('/pagina2', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'pagina2.html')); // Envia a página 2
});

app.get('/usuarios', (req,res) =>{

    res.send(usuarios)
})

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
