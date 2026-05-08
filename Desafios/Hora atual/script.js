
function carregar() {
    var fundo = window.document.querySelector('section#container') //definindo o fundo da section
    var msg = window.document.getElementById('msg') // definindo a mensagem de exibicao
    var img = document.getElementById('imagem') // definindo imagem
    var date = new Date() //cirando nova data
    var hora = date.getHours() //pegando horario atual para o dia


    // estrutura de condicao com if e else
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#cfc4b0'
        msg.innerHTML = `Bom dia! ta na hora de acordra ja em amigo!!`
        fundo.style.backgroundImage = "linear-gradient(to right, #ffef61, #8a5422)"



    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.jpg'
        document.body.style.background = '#f37f16'
        fundo.style.backgroundImage = "linear-gradient(to right, #f5b982, #8a5422)"
        msg.innerHTML = `Boa tarde! bora que ta na hora de produzir!`


    } else {
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#252422'
        msg.innerHTML = `Ta ficando tarde em, ta na hora de dormir`
        fundo.style.background = "linear-gradient(to left, #756c72, #4f4750)"
    }
}








