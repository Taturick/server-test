const express = require('express');
const path = require('path');

const app = express();

// Configurar o middleware para servir arquivos estáticos na pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Definir a rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'paginainicial.html'));
});

// Resto do seu código

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});

