document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtém os valores dos campos de entrada
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Definir usuário e senha para login
    const users = [
        { username: "usuario", password: "senha123", role: "user" },
        { username: "admin", password: "admin123", role: "admin" }
    ];

    // Verificar se o login é válido
    let userFound = false;
    let role = "";
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            userFound = true;
            role = users[i].role;
            break;
        }
    }

    // Se o login for bem-sucedido, redireciona para a página correspondente
    if (userFound) {
        if (role === "admin") {
            window.location.href = "admin.html"; // Página do admin
        } else {
            window.location.href = "user.html"; // Página do usuário comum
        }
    } else {
        document.getElementById("error-message").innerText = "Usuário ou senha inválidos!";
    }
});
