/*

  Задание 1.

  Написать скрипт который будет будет переключать вкладки по нажатию
  на кнопки в хедере.

  Главное условие - изменять файл HTML нельзя.

  Алгоритм:
    1. Выбрать каждую кнопку в шапке
       + бонус выбрать одним селектором

    2. Повесить кнопку онклик
        button1.onclick = function(event) {

        }
        + бонус: один обработчик на все три кнопки

    3. Написать функцию которая выбирает соответствующую вкладку
       и добавляет к ней класс active

    4. Написать функцию hideAllTabs которая прячет все вкладки.
       Удаляя класс active со всех вкладок

  Методы для работы:

    getElementById
    querySelector
    classList
    classList.add
    forEach
    onclick

    element.onclick = function(event) {
      // do stuff ...
    }

*/

let buttonContainer = document.getElementById('buttonContainer');
let tabContainer = document.getElementById('tabContainer');

buttonContainer.onclick = function (event) {
    let button_number = event.target.dataset.tab;
    show_tab(button_number);
};

let show_tab = function (button_number) {
    let tab_number = tabContainer.querySelector('[data-tab="' + button_number + '"]');
    tab_number.classList.toggle('active');
    hideAllTabs()
};

let hideAllTabs = function () {
    let tab_active = tabContainer.getElementsByClassName('active');

    if (tab_active.length === 3) {
        let close_all_tab = tabContainer.querySelectorAll('[data-tab]');
        close_all_tab.forEach(function (el) {
            el.classList.remove('active');
        });
    }
};
