const got = require ('got')

(async()=>{
    try{
        const response =await got('https://sinder.com')
        console.log(response.body)
    }catch(errr){
        console.log(errr)
    }
}) ();
(async()=>{
    const {response} =await got.post('https://sinder.com', {
        json: {
            hola: "Cliente"
        },
        responseType:'json'
    });
    console.log(response.data)
}) ();