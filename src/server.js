const express = require('express');
const { getCards } = require("./controllers/cards.controller") ;

const app = express();

app.set('json spaces', 2);

app.get('/cards', getCards)

module.exports = app
