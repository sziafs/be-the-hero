const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); // modulo de seguranca que determina quem pode acessar a aplicacao

// // projeto em producao
// app.use(cors({
//     origin: 'http://bethehero.com' // qual endereco pode acessar a aplicacao (onde o front esta hospedado)
// }));

app.use(express.json());
app.use(routes);

app.listen(3333);