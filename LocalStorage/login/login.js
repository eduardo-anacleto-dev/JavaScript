const cadastro = document.getElementById('cadastro')

cadastro.addEventListener('click' , () =>{
    window.location.href = "../cadastro/cadastro.html"
})
const btnLogin = document.getElementById('loginConfirm')
const nomeSalvo = localStorage.getItem('userName')
const senhaSalva = localStorage.getItem('senha')
 const msgLogin = document.getElementById('msgLogin')

btnLogin.addEventListener('click' , (event) =>{
    event.preventDefault
    let nomeLogin = document.getElementById('nomeLogin').value
    let senhaLogin = document.getElementById('senhaLogin').value
    if(nomeLogin === nomeSalvo && senhaLogin === senhaSalva){
        msgLogin.style.color = 'green'
        msgLogin.innerHTML = `Seu Login foi Aprovado!!!`
        window.location.href = "../index/index.html"
    } else {
        msgLogin.style.color = 'red'
        msgLogin.innerHTML = `Nome de usuario ou senha incorretos!!!`
    }
})
