// Manipulação do formulário de login
document.getElementById('login-form').addEventListener('submit', function(event) 
{
    event.preventDefault();  // Impede o envio do formulário

    // Obter valores dos campos de entrada
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Credenciais válidas (essas credenciais são fictícias para o exemplo)
    const validEmail = "root@gmail.com";
    const validPassword = "root";

    // Validação do e-mail e senha
    if (email === validEmail && password === validPassword) 
    {
        window.location.href = "index.html"; // Redirecionamento para uma página após o login
    } else
    {
        // Caso as credenciais estejam erradas
        alert("E-mail ou senha inválidos!");
    }
});

// Manipulação do formulário de cadastro
document.getElementById('register-form').addEventListener('submit', function(event) 
{
    event.preventDefault();  // Impede o envio do formulário

    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validação de senha e confirmação de senha
    if (password !== confirmPassword) 
    {
        alert("As senhas não coincidem!");
        return;
    }

    // Supondo que a validação seja bem-sucedida
    alert("Cadastro realizado com sucesso!");
});

// Trocar para o formulário de cadastro
document.getElementById('show-register').addEventListener('click', function(event) 
{
    event.preventDefault();
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('register-container').style.display = 'block';
});

// Trocar para o formulário de login
document.getElementById('show-login').addEventListener('click', function(event) 
{
    event.preventDefault();
    document.getElementById('register-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
});