const { config } = require('dotenv');
const express = require('express');
require('dotenv')config();

const app = express();

const frese = "Hola mundo como estan";

app.get('/api/frase', (_req, res) => {
    res.status(200).send(frese)
})

const PORT = process.env.PORT || 3002
app.listen(PORT, () => console.info(`Server up and running on port ${PORT}`))