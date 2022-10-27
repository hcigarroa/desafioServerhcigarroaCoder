const express = require('express');

const productosRouter = require('./productos/productos.router')
const personasRouter = require('./personas/personas.router')

const router = express.Router();

router.get('/api/health', (_req, res) => {
    res.status(200).json({
        success: true,
        health: 'up',
        enviroment: process.env.ENVIRONMENT || 'not found'
    })
})

router.use('/productos', productosRouter);

router.use('/personas', personasRouter)


module.exports = router;