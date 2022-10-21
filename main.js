// const arr = [1, 2, 3, 4, 4, 2, 1]

// const result = {
//     1: 2,
//     2: 2,
//     3: 1,
//     4: 2
// }

const arregloRandom = Array.from({length: 10000}, () => Math.floor(Math.random() * 56) + 1)

//console.log(arregloRandom)

// arregloRandom.forEach(i => {
//     console.log(i)
// })

let resultado = {}

arregloRandom.forEach(i => {
    resultado[i] = "Pablo"
})

console.log(resultado)

