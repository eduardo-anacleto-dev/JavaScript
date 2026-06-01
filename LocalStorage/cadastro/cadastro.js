let saveUser = document.getElementById('newSave')

//ADICIONAR NOME DE USUARIO
saveUser.addEventListener('click', (event) => {
    event.preventDefault()
    let name = document.getElementById('nomeCadastro').value
    localStorage.setItem('userName', name)
})

//ADICIONAR SENHA
let newPass = document.getElementById('addPassword')
newPass.addEventListener('click', (event) => {
    let senha = document.getElementById('senhaCadastro').value
    localStorage.setItem('senha', senha)

    let inputName = document.getElementById('nomeCadastro').value.trim()
    const msg = document.getElementById('mensagem')
    if(inputName === "" || senha ===""){
        msg.style.color = 'red'
        msg.innerHTML =`Preencha todos os campos!`
    } else{
        msg.style.color = 'green'
        msg.innerHTML =`Seu login foi aprovado!!`

    }
})

//LIMPAR DADOS DO LOCAL STORAGE
const clear = document.getElementById('clear')
clear.addEventListener('click' , ()=>{
    localStorage.clear()
})

//TELA DE LOGIN
const telaLogin = document.querySelector('#login')
login.addEventListener('click' , () =>{
    window.location.href = "../login/login.html"
})

