// Función para mostrar mensajes
function showMessage(message, type = 'warning') {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = `alert alert-${type}`;
    messageDiv.style.display = 'block';
}

// Manejar el envío del formulario
document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evitar el envío tradicional del formulario

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
        showMessage('Por favor, completa todos los campos.', 'warning');
        return;
    }

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();

        if (response.ok) {
            showMessage(result.message, 'success');
            // Redirigir al dashboard después del login
            window.location.href = '/dashboard';
        } else {
            showMessage(result.message, 'danger');
        }
    } catch (error) {
        showMessage('Error en la conexión con el servidor.', 'danger');
    }
});
