const express = require('express');
const errorMiddleware = require('../../middlewares/errorMiddleware');
const authMiddleware = require('../../middlewares/authMiddleware');
const router = express.Router();

let productos = [ {
        "id" : "1",
        "title" : "Cajas de Madera",
        "price" : "500",
        "thumbnail" : ('../../Caja1.png')
    },
    {
        "id" : "2",
        "title" : "Corazon Ceramica",
        "price" : "750",
        "thumbnail" : ('../../img/Ceramica 2.png')
    },
    {
        "id" : "3",
        "title" : "Picaporte",
        "price" : "450",
        "thumbnail" : ('../../img/Colgante3.png')
    },
    {
        "id" : "4",
        "title" : "Maceta",
        "price" : "550",
        "thumbnail" : ('../../img/Maceta3.png')
    },
    {
        "id" : "5",
        "title" : "Separador",
        "price" : "500",
        "thumbnail" : ('../../img/Separador 1.png')
    }
];

router.get('/:id', (_req, res, next) => {
    try{
        res.status(200).json(productos)
    }catch(err){
        next(err)
    }
});

router.post('/', authMiddleware, (req, res, next) => {
try{
    const { body } = req;
    productos.push(body);
    res.redirect('/public/index.html')
}catch(err){
    res.status(500).json(err)
}
});

module.exports = router;