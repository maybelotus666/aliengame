document.addEventListener('DOMContentLoaded', function() {
    // Botão de login (corrigido)
    const botaoLogin = document.getElementById('btnlogin');
    if (botaoLogin) {
        botaoLogin.addEventListener('click', function() {
            window.location.href = '../paginadelogin/login.html';  // Ajuste caminho se necessário
        });
    }
    
    // Botão JOGAR para jogo.html (testado)
    const botaoJogar = document.getElementById('btnjogar');
    if (botaoJogar) {
        botaoJogar.addEventListener('click', function() {
            window.location.href = '../paginadejogo/jogo.html';
        });
    } else {
        console.error('Botão btnjogar não encontrado!');
    }
});
