document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.signup-form');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const passwordToggle = document.querySelector('.password-toggle');
    const validationBubble = document.querySelector('.validation-bubble');

    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim() !== "") {
            validationBubble.style.display = 'none';
        } else {
            validationBubble.style.display = 'block';
        }
    });


    passwordToggle.addEventListener('click', () => {
        const isPassword = passwordInput.getAttribute('type') === 'password';
        
        passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
        
        passwordToggle.style.opacity = isPassword ? '1' : '0.5';
    });


    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, ""); 
        
        if (value.length > 0) {
            value = `(${value}`;
        }
        if (value.length > 3) {
            value = `${value.slice(0, 3)}) ${value.slice(3)}`;
        }
        if (value.length > 10) {
            value = `${value.slice(0, 10)}-${value.slice(10, 14)}`; 
        }
        
        e.target.value = value;
    });


    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        if (passwordInput.value !== confirmPasswordInput.value) {
            alert('As senhas não coincidem. Por favor, verifique.');
            confirmPasswordInput.focus();
            return;
        }

        const formData = {
            nome: nameInput.value,
            email: document.getElementById('email').value,
            telefone: phoneInput.value,
            senha: passwordInput.value,
            novidadesEmail: document.getElementById('newsletter').checked
        };

        console.log('Dados prontos para envio ao servidor:', formData);
        alert('Conta criada com sucesso! (Verifique o console do navegador)');
        
       
    });
});