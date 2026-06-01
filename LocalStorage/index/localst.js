// ADICIONAR NOME DE USUARIO
const save = document.getElementById('addName')
const logout = document.getElementById('logout')


window.addEventListener('DOMContentLoaded', () =>{
    const login = document.getElementById('login')
    login.innerHTML = (localStorage.getItem('userName'))
})

//ADICIONANDO ITENS NA LISTA
const tarefas = document.getElementById('tarefas')
let adicionar = document.getElementById('adicionar')


adicionar.addEventListener('click' , (event) =>{
    event.preventDefault() // adapta o botao para um form

    let lista = document.getElementById('lista')
    
    // cria array vazio
    const item = JSON.parse(localStorage.getItem('itemLista')) || []
    item.push(tarefas.value)

    localStorage.setItem('itemLista' , JSON.stringify(item))

    const li = document.createElement('li')
    lista.appendChild(li)
    li.textContent = tarefas.value
   
    tarefas.value = ``
    tarefas.focus()
})

logout.addEventListener('click' , () =>{
    window.location.href = "../login/login.html"
})






    






















/*/ ADICIONA CHATE E VALOR
localStorage.setItem("Idade" , "16")

let valor = localStorage.getItem("Idade")
console.log(valor)

// REMOVE CHAVE
localStorage.removeItem("Idade")

// REMOVE TODAS AS CHAVES
localStorage.clear()

 OLHAR TODOS OS VALORES DAS CHAVES    
const keys = Object.keys(localStorage)
localStorage.setItem("cidade", "sao paulo")
localStorage.setItem("idade" , '16')
console.log(key);

for (const key of keys){
    console.log(localStorage.getItem(key))
} */


