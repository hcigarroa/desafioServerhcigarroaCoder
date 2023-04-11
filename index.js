const express = require('express');
const router = express.Router();
const pagesRouter = require('./pages/pages.routes');
const sessionRouter = require('./session/session.routes');
const log4js = require('log4js');
const winston = require('winston');
const yoga- createYoga({schema});
const Server -createServer(yoga)

server.listen(400,()=>{console.log("Server Arriba")})

import { create } from "connect-mongo";
import { createServer } from "node:http";
router.get('/health', (_req, res) => {
    res.status(200).json({
        success: true,
        environment: process.env.ENVIRONMENT || 'undefined',
        health: 'Up!'
    })
})

process.cwd();
process.pid;
process.version;
process.title;
process.plataform;
process.memoryUsage();

 use(pagesRouter)
.use('/api', sessionRouter);

module.exports = router;


let visitas = 0

const calculo = function(){
    let sum = 0
    for(let i = 0; i < 5e9; i++){
        sum += i
    }
    return sum
}


app.get("/", function(req, res){
    visitas++
    res.send("Visitas: " + visitas)
})

app.get("/calculo", function(req, res){
    let sum = calculo()
    res.send("LA sumaes es : ", sum)
   })

app.listen(8080, function(){
    console.log("Server run on port 8080")

})