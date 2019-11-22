/*
  Задание:
  Написать скрипт который:
    1. Собирает данные с формы (3 разных полей), конвертирует их в json и выводит в консоль.
  ->  2. Сделать отдельный инпут который выполняет JSON.parse(); на ту строку что вы туда ввели и выводит результат в консоль.

  Array.from(HTMLNodeColection); -> Arary

  <form>
    <input name="name" />
    <input name="age"/>
    <input name="password"/>
    <button></button>
  </form>

  <form>
    <input />
    <button></button>
  </form>
  -> '{"name" : !"23123", "age": 15, "password": "*****" }'


*/

let formSubmit = document.getElementById('submit');
let formPars = document.getElementById('pars');

formSubmit.addEventListener('submit', function (event) {
    event.preventDefault();
    let obj = {};
    let arr =  Array.from(event.target.querySelectorAll('input'));
    arr.forEach(function (input) {
        obj[input.name] = input.value
    });
    console.log(JSON.stringify(obj))
});

formPars.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(JSON.parse(event.target.querySelector('input').value))
});