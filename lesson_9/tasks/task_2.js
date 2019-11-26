/*

    Задание 2:
    Написать форму логина (логин пароль), которая после отправки данных записывает их в localStorage.
    Если в localStorage есть записть - На страниче вывести "Привет {username}", если нет - вывести окно
    логина.

    + бонус, сделать кнопку "выйти" которая удаляет запись из localStorage и снова показывает форму логина
    + бонус сделать проверку логина и пароля на конкретную запись. Т.е. залогинит пользователя если
    он введет только admin@example.com и пароль 12345678

*/

let container = document.getElementById('container');
let loginForm = document.getElementById('login');
let logoutForm = document.getElementById('logout');
let login = 'admin@example.com';
let pass = '12345678';

function hide() {
    Array.from(container.children).forEach(function (form) {
        form.classList.toggle('hide');
    });
}


loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if ((login === loginForm[0].value) && (pass === loginForm[1].value)) {
        if (loginForm[2].checked) {
            localStorage.setItem('login', loginForm[0].value);
            localStorage.setItem('pass', loginForm[1].value);
            }
        document.getElementById('hi').innerHTML = `<p>Welcome <b>${loginForm[0].value}</b></p>`
        hide()
    } else {
        alert('Invalid login or password');
        loginForm[0].value = '';
        loginForm[1].value = '';
    }
});

logoutForm.addEventListener('submit', function (event) {
    event.preventDefault();
    localStorage.removeItem('login');
    localStorage.removeItem('pass');
    loginForm[0].value = '';
    loginForm[1].value = '';
    loginForm[2].checked = false;
    hide()
});

let loginLS = localStorage.getItem('login');
let passLS = localStorage.getItem('pass');

if((loginLS !== null) && (passLS !== null)) {
    if ((loginLS === login) && (passLS === pass)) {
        document.getElementById('hi').innerHTML = `<p>Welcome <b>${loginLS}</b></p>`
        hide()
    }
}