const express = require('express');

const router = express.Router();

let personas = [ {
    "id": "74",
    "name": "Hector",
    "age": "48"
},
{
    "id": "1",
    "name": "Michael",
    "age": "27"
},
{
    "id": "2",
    "name": "Fredo",
    "age": "45"
},
{
    "id": "3",
    "name": "Santino",
    "age": "39"
}];

router.get('/', (_req, res) => {
    try{
        res.status(200).json(personas)
    }catch(err){
        res.status(500).json(err)
    }
});

router.get('/:id', (req, res) => {
    try{
        const { id } = req.params
        const selected = personas.filter(i => i.id == id)
        res.status(200).json({
            success: true,
            data: selected
        })
    }catch(err){
        res.status(500).json(err)
    }
})

router.post('/', (req, res) => {
    try{
        const { body } = req;
        personas.push(body);
        res.status(200).json({
            success: true,
            data: body
        })
    }catch(err){
        res.status(500).json(err)
    }
    
    })
    
    module.exports = router;