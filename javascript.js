function minhaFuncao() {
    var utilizador = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var senha_confirm = document.getElementById('senha_confirm').value;

    // Verificação do nome do usuário
    if(utilizador.length < 4){
        alert("Nome de utilizador inválido (deve ter pelo menos 4 caracteres)");
        return false;
    }

    // Verificação do email utilizando expressão regular
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Email inválido");
        return false;
    }

    // Verificação da senha
    if(senha.length < 6 || senha.length > 12){
        alert("A senha deve ter entre 6 e 12 caracteres");
        return false;
    }

    // Verificação se as senhas coincidem
    if(senha !== senha_confirm){
        alert("As senhas não coincidem");
        return false;
    }

    // Exibe mensagem de sucesso
    alert("Tudo certo! Carregando o jogo...");

    // Recarrega a página após o usuário clicar em "OK" no alerta
    window.location.reload();

    return true;
}
