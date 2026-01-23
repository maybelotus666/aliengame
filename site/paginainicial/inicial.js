// botão de login //

 document.addEventListener("DOMContentLoaded", function() {
    const botaoLogin = document.getElementById("btnlogin");

    botaoLogin.addEventListener("click", function() {
        window.location.href = "../paginadelogin/login.html"; 
    });
});
