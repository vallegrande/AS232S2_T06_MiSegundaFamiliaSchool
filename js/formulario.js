function validateForm() {
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const dni = document.getElementById("dni").value.trim();
    const email = document.getElementById("email").value.trim();
    
    if (!validateName(name)) {
        alert("El nombre no puede contener números ni caracteres especiales.");
        return false;
    }

    if (!validateName(surname)) {
        alert("Los apellidos no pueden contener números ni caracteres especiales.");
        return false;
    }

    if (!validateDNI(dni)) {
        alert("El DNI debe contener exactamente 8 números.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    return true;
}

// Función para validar el formato de correo electrónico
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Función para validar que el nombre y los apellidos no contengan números ni caracteres especiales
function validateName(name) {
    const re = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s']+$/; // Acepta letras, espacios y apóstrofes
    return re.test(name);
}

// Función para validar que el DNI tenga exactamente 8 números
function validateDNI(dni) {
    const re = /^\d{8}$/;
    return re.test(dni);
}




