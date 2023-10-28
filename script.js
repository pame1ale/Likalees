// script.js
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar las credenciales (puedes agregar tus propias verificaciones aquí)
    if (username === "usuario" && password === "contrasena") {
        // Redirige al usuario a index.html
        window.location.href = "inicio.html";
    } else {
        alert("Nombre de usuario o contraseña incorrectos");
    }
}
