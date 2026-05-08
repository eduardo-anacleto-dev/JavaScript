function gerar() {

    let numero = document.getElementById('num')
    var result = document.getElementById('result')

    if (numero.value.length == 0 || Number(numero.value) == 0) {
        window.alert(' Seu numero para tabuada esta incorreto! digite um numero valido por favor')
        mumero = 1

    } else {
        let num = Number(numero.value)

        //Limpando o conteudo antes
        let texto = ''
        for (let i = 1; i < 10; i++) {
            texto += `${num} X ${i} =  ${num * i} <br> `
        }
        result.innerHTML = texto
    }
}


