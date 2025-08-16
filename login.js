const form = document.querySelector('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const usuario = document.getElementById('username').value;
    const senha = document.getElementById('password').value;

    document.querySelector('.quadro-login').innerHTML = `
        <h2 class="mensagem-login">Bem-vindo: ${usuario}</h2>
        <p class="mensagem-login">Sua senha é: ${senha}</p>
    `;
    form.reset();
});

const cadastro = document.querySelector('form');
cadastro.addEventListener('submit', function(event){

    event.preventDefault();
    const usuario = document.getElementById('username').value;
    const senha = document.getElementById('password').value;

    document.querySelector('.quadro-cadastro').innerHTML = `
        <h2 class="mensagem-cadastro">Cadastro realizado com sucesso!</h2>
        <p class="mensagem-cadastro">Usuário: ${usuario}</p>
        <p class="mensagem-cadastro">Senha: ${senha}</p>
    `;
    cadastro.reset();
});