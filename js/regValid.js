document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let isValid = true;

    // Validate login
    const login = document.getElementById('login').value;
    const loginError = document.getElementById('loginError');
    const loginRegex = /^[a-zA-Zа-яА-Я]{5,}$/;
    if (!loginRegex.test(login)) {
        loginError.textContent = 'Логин должен содержать минимум 5 букв (кириллица или латиница).';
        isValid = false;
    } else {
        loginError.textContent = '';
    }

    // Validate phone
    const tel = document.getElementById('tel').value;
    const telError = document.getElementById('telError');
    const telRegex = /^\d{11}$/;
    if (!telRegex.test(tel)) {
        telError.textContent = 'Телефон должен содержать только цифры и быть длиной 11 цифр.';
        isValid = false;
    } else {
        telError.textContent = '';
    }

    // Validate password
    const pass = document.getElementById('pass').value;
    const passError = document.getElementById('passError');
    if (pass.length < 6) {
        passError.textContent = 'Пароль должен содержать минимум 6 символов.';
        isValid = false;
    } else {
        passError.textContent = '';
    }

    // Validate password confirmation
    const resetPass = document.getElementById('reset_pass').value;
    const resetPassError = document.getElementById('resetPassError');
    if (resetPass !== pass) {
        resetPassError.textContent = 'Пароли не совпадают.';
        isValid = false;
    } else {
        resetPassError.textContent = '';
    }

    if (isValid) {
        alert('Форма успешно отправлена!');
        // Here you can add the code to submit the form
        // document.getElementById('registrationForm').submit();
    }
}