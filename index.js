const readline = require('readline-sync')

function resMaquina () {
    const myArray = ['Pedra', 'Papel', 'Tesoura']
    const getAleatorio = myArray[Math.floor(Math.random() * myArray.length)]
    return getAleatorio
}

let contUsuario = 0
let contMaquina = 0
let contEmpate = 0

function execResult (maquina, usuario) {
    if (maquina === usuario) {
        console.log('Empate!')
        contEmpate++
    } else {
        if (maquina === 'Pedra' && usuario === 'Papel') {
            console.log('Você venceu!')
            contUsuario++
        } else if (maquina === 'Papel' && usuario === 'Tesoura') {
            console.log('Você venceu!')
            contUsuario++
        } else if (maquina === 'Tesoura' && usuario === 'Pedra') {
            console.log('Você venceu!')
            contUsuario++
        } else {
            console.log('Você perdeu!')
            contMaquina++
        }
    }
    console.log(`Resultado da maquina: ${maquina}`)
}

for (let i = 0; i <=10; i++) {
    const resUsuario = readline.question('Escolha pedra papel ou tesoura: ')
    execResult(resMaquina(),resUsuario)
}

console.log('Placar:')
console.log(`Qtd vezes que você empatou: ${contEmpate}`)
console.log(`Qtd vezes que você venceu: ${contUsuario}`)
console.log(`Qtd vezes que você perdeu: ${contMaquina}`)