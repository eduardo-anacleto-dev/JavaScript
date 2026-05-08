var nome = window.prompt (`Ola, qual e o seu nome?`)
var titulo = document.getElementById('titulo')
titulo.innerHTML = `Ola ${nome} vamos verificar sua idade!`

function verificar() {
    // definindo data de nascimento
var data = new Date
var anoat = data.getFullYear()
var vano = document.getElementById ('txtano')
   
    //verificando idade da pessoa

var resposta = document.getElementById ('res')

    if (vano.value.length != 4 || Number(vano.value) < 1950 || Number (vano.value) > anoat) {
        window.alert (`digite um codigo valido por favor`)
    }   else {
        var vshjhhex = document.getElementsByName ('radsexo')
        var idade = anoat - Number(vano.value)
        var genero = ''
        // isso e igual a <img id="foto">
        var img = document.createElement ('img')
        img.setAttribute('id', 'foto')



    if (vsex[0].checked) {
    genero = 'Homem'
        if (idade >= 0 && idade < 10) {
        img.setAttribute ('src' , 'meninocrianca.png') //CRIANCA
        }   else if (idade < 20) {
        img.setAttribute('src' , 'adolescentehomem.png') //ADOLESCENTE
        }   else if (idade > 21 && idade < 55) {
        img.setAttribute('src' , 'homemjovem.png') //ADULTO
        }   else if (idade > 55) {
        img.setAttribute('src' , 'idosohomem.png') //IDOSO
        }
      


    //MULHER
    }   else if(vsex[1].checked) { 
    genero = 'Mulher'
       if (idade >= 0 && idade < 10) {
        img.setAttribute ('src' , 'criancasara.png')
        img.setAttribute ('id' , 'sarinha') //CRIANCA
        }   else if (idade < 20) {
        img.setAttribute('src' , 'adolescentemulher.png')
        img.setAttribute('id' , 'adolescente') //ADOLESCENTE
        }   else if (idade > 21 && idade < 55) {
        img.setAttribute('src' , 'mulherjovem.png') //ADULTO
        }   else if (idade > 55) {
        img.setAttribute('src' , 'idosamulher.png') //IDOSO
        }
    }
    resposta.style.textAlign = 'center'
    resposta.innerHTML = `Detectamos que voce e ${genero} e tem ${idade} anos`
    resposta.appendChild(img)
    }

    
}



