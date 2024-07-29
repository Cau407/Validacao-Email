document.getElementById('formul').addEventListener('submit', function(evento) {
    evento.preventDefault()
    
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    const containerErro = document.getElementById('container-erro')

    try {
        validarEmail (email)
        validarSenha (senha)
        containerErro.textContent = ''

        console.log ('Formulário enviado com sucesso!')
        alert ('Formulário enviado com sucesso!')
    }
    catch (erro) {
        containerErro.textContent = erro.message
    }
})

function validarEmail(email) {
    if (!email) {
        throw new Error('O email é obrigatório')
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        throw new Error('Por favor, insira um endereço de email válido')
    }
}

function validarSenha(senha) {
    if (!senha) {
        throw new Error('A senha é obrigatória')
    }
    if (senha.length < 6) {
        throw new Error('A senha deve ter pelo menos 6 caractéres')
    }
}