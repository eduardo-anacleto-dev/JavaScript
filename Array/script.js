let numero = document.querySelector('#numero')
let btn = document.getElementById('add')
const list = document.getElementById('lista')
let res = document.getElementById('finalizar')
const resultado = document.getElementById('resultado')



//ADICIONAR NUMEROS NA LISTA
const optionArray = Array.from(list.options)
btn.addEventListener('click', () => {
    let num = Number(numero.value)

    let numAdd = document.createElement('option')
    numAdd.value = num
    numAdd.textContent = num

    list.appendChild(numAdd)
    optionArray.push(num)
    numero.value = ''
    numero.focus()
})


// Finalizar
res.addEventListener('click', () => {
    let soma = 0
    for (let i = 0; i < optionArray.length; i++) {
        soma += optionArray[i]
    }

    let media = soma / optionArray.length

    let menor = optionArray[0]
    let maior = optionArray[0]
    for (let i = 0; i < optionArray.length; i++) {
        if (optionArray[i] < menor) {
            menor = optionArray[i]

        } else if (optionArray[i] > maior) {
            maior = optionArray[i]
        }
    }

    resultado.innerHTML = `
<p> Ao todo temos ${optionArray.length} Numeros cadastrados</p>
<p> A soma de todos os numeros digitados e ${soma}</p>
<p> A media dos valores digitados e ${media}</p>
<p> O menor valor informado foi ${menor}</p>
<p> O maior valor informado foi ${maior}</p>`
})



// LIMPAR LISTA
const clean = document.getElementById('clean')
clean.addEventListener('click', () => {
    list.replaceChildren()
    resultado.innerHTML = ``
})