const argv = require('process').argv

const operacion = argv[2]
const numero1 = +argv[3]
const numero2 = +argv[4]

const sumar = require('./sumar')
const restar = require('./restar')
const multiplicar = require('./multiplicar')
const dividir = require('./dividir')
//Comentario
switch(operacion){
    case 'sumar':
        console.log(sumar(numero1, numero2))
        break
    case 'restar':
        console.log(restar(numero1, numero2))
        break
    case 'multiplicar':
        console.log(multiplicar(numero1, numero2))
        break
    case 'dividir':
        console.log(dividir(numero1, numero2))
        break
    default:
        console.log("ERROR")
}