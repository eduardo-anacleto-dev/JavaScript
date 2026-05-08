var nome = window.prompt(`Ola, qual e o seu nome?`)
var titulo = document.getElementById('titulo')


// modifica o nome do usuario no titulo
titulo.innerHTML = `Ola ${nome} vamos fazer uma contagem`


function verificar() {
    let inicio = (document.getElementById('inicio'))
    let fim = (document.getElementById('fim'))
    let contador = (document.getElementById('passo'))
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || contador.value.length == 0) {
        res.innerHTML = `impossivel iniciar contagem!`
        window.alert(' ERRO! digite um numearo valido')


    } else {
        res.innerHTML = `contando... <br>`
        window.alert(' Tudo ok!!')
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(contador.value)
        if (p == 0) {
            window.alert(' Passo invalido! considerando passo como 1...')
            p = 1
        }
        if (i < f) { //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {      //contagem decrescente 
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
