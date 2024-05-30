// Функция для определения минимального числа
function min() {
    let a = parseFloat(document.getElementById("fnum").value);
    let b = parseFloat(document.getElementById("snum").value);

    if (isNaN(a) || isNaN(b)) {
        alert('Пожалуйста, введите оба числа.');
    } else {
        let minNumber = a < b ? a : b;
        document.getElementById("result").innerText = `Минимальное число: ${minNumber}`;
    }
}

// Остальные функции остаются без изменений
function admin() {
    let name = document.getElementById('name').value;
    document.getElementById("admin").innerText = `Admin: ${name}`;
}

function con() {
    let age = document.getElementById("age").value;
    if (age <= 0) {
        alert("Возраст не может быть отрицательным числом!");
    } else if (!confirm(`Вы уверены, что вам ${age}?`)) {
        alert("Введите свой возраст снова!");
    }
}

function surname_change() {
    let surnameInput = document.getElementById("surname_input").value;
    if (surnameInput !== '' && /^[A-zА-яЁё]+$/.test(surnameInput)) {
        document.getElementById("surname_output").innerText = surnameInput;
    } else {
        alert("Введите фамилию");
    }
}

function name_change() {
    let nameInput = document.getElementById("name_input").value;
    if (nameInput !== '' && /^[A-zА-яЁё]+$/.test(nameInput)) {
        document.getElementById("name_output").innerText = nameInput;
    } else {
        alert("Введите имя");
    }
}
function toggleSubmitButton() {
    var submissionCheckbox = document.getElementById("submition");
    var submitButton = document.getElementById("submit_button");
    
    submitButton.disabled = !submissionCheckbox.checked;
}

function submitForm() {
    var submissionCheckbox = document.getElementById("submition");

    if (submissionCheckbox.checked) {
        alert("Анкета отправлена");
    } else {
        alert("Пожалуйста, заполните анкету перед отправкой.");
    }
}

