/*

    Документация:

    https://developer.mozilla.org/ru/docs/HTML/HTML5/Constraint_validation

    form.checkValidity() > Проверка всех полей формы на валидость
    form.reportValidity() > Проверяет все поля на валидность и выводит возле каждого из не прошедшего валидацию
        сообщение с ошибкой

    formElement.validity > Объект с параметрами валидности поля
    formElement.setCustomValidity(message) > Метод который задаст validity.valid = false, и при попытке отправки
        сообщения выведет message в браузерный попал

    Классы для стилизации состояния элемента
    input:valid{}
    input:invalid{}


    Задание:

    Используя браузерное API для валидации форм реализовать валидацию следующей формы:


    - Имя пользователя: type:text -> validation: required; minlength = 2;
        Если пустое выввести сообщение: "Как тебя зовут дружище?!"
    - Email: type: email -> validation: required; minlength = 3; validEmail;
        Если эмейл не валидный вывести сообщение "Ну и зря, не получишь бандероль с яблоками!"
    - Пароль: type: password -> validation: required; minlength = 8; maxlength=16;
        Если пустой вывести сообщение: "Я никому не скажу наш секрет";
    - Количество сьеденых яблок: type: number -> validation: required; minlength = 1; validNumber;
        Если количество 0 вывести эррор с сообщением "Ну хоть покушай немного... Яблочки вкусные"
    - Напиши спасибо за яблоки: type: text -> validation: required;
        Если текст !== "спасибо" вывести эррор с сообщением "Фу, неблагодарный(-ая)!" используя setCustomValidity();

    - Согласен на обучение: type: checkbox -> validation: required;
        Если не выбран вывести эррор с сообщение: "Необразованные живут дольше! Хорошо подумай!"

    Внизу две кнопки:

    1) Обычный submit который отправит форму, если она валидна.
    2) Кнопка Validate(Проверить) которая запускает методы:
        - yourForm.checkValidity: и выводит на страницу сообщение с результатом проверки
        - yourForm.reportValidity: вызывает проверку всех правил и вывод сообщения с ошибкой, если такая есть

*/

document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById('form');
    let inputValidate = document.getElementById('validate');

    inputValidate.addEventListener("click", function () {
        function inputValid(input, message) {
            input.setCustomValidity('');
            if (input.checkValidity()) {
                input.setCustomValidity('');
            } else {
                input.setCustomValidity(message);
                form.reportValidity();
            }
        }

        function thValid(input, message) {
            input.setCustomValidity('');
            if (input.value.toLowerCase() === 'спасибо') {
                input.setCustomValidity('');
            } else {
                input.setCustomValidity(message);
                form.reportValidity();
            }
        }

        let messages = {
            name: "Как тебя зовут дружище?!",
            email: "Ну и зря, не получишь бандероль с яблоками!",
            password: "Я никому не скажу наш секрет",
            number: "Ну хоть покушай немного... Яблочки вкусные",
            th: "Фу, неблагодарный(-ая)!",
            checkbox: "Необразованные живут дольше! Хорошо подумай!"
        };
        let all = document.querySelectorAll("input");

        function checkValid() {
            all.forEach(function (i) {
                let input = document.getElementById(i.id);
                if (i.id === 'th') {
                    thValid(input, messages[i.id])
                } else {
                    inputValid(input, messages[i.id])
                }
            })
        }

        all.forEach(function (i) {
            let input = document.getElementById(i.id);
            if (i.id === 'checkbox') {
                i.addEventListener('click', function () {
                    checkValid();
                })
            } else {
                i.addEventListener('keyup', function () {
                    checkValid();
                })
            }
        });

        checkValid();
    });
    let submit = document.getElementById("submit");
    submit.addEventListener("click", function () {
        if (form.checkValidity()) {
            alert('SUBMIT WORK');
        }
    });
});