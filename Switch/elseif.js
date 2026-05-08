var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são ${hora} horas`)

if (hora < 12) {
    console.log('Bom dia meu amigo')
} else if (hora >= 12) {
    console.log('Boa tardue meuamigo, ta na hora de produzir em')
} else if (hora > 18) {
    console.log('Ja está anoite em, hora de dormir')
} else if (hora >= 0 && hora < 3) {
    console.log('Esta de madrugada em')
}  
