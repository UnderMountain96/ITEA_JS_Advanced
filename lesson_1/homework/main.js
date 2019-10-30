/*

  Задание 1.

  Написать функцию которая будет задавать СЛУЧАЙНЫЙ цвет для фона.
  Каждая перезагрузка страницы будет с новым цветом.
  Для написания используйте функцию на получение случайного целого числа,
  между минимальным и максимальным значением (Приложена снизу задания)

  + Бонус, повесить обработчик на кнопку через метод onClick
  + Бонус, использовать 16-ричную систему исчесления и цвет HEX -> #FFCC00
  + Бонус выводить полученый цвет по центру страницы.
  
  Необходимо создать блок через createElement задать ему стили через element.style
  и вывести через appendChild или insertBefore

  Необходимые материалы:
    Math.Random (Доки): https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    __
    Работа с цветом:
    Вариант 1.
      Исользовать element.style.background = 'rgb(r,g,b)';
      где r,g,b случайное число от 0 до 255;

    Вариант 2.
      Исользовать element.style.background = '#RRGGBB';
      где, RR, GG, BB, значние цвета в 16-ричной системе исчесления
      Формирование цвета в вебе: https://ru.wikipedia.org/wiki/%D0%A6%D0%B2%D0%B5%D1%82%D0%B0_HTML
      Перевод в 16-ричную систему исчесления делается при помощи
      метода Number.toString( 16 ) https://www.w3schools.com/jsref/jsref_tostring_number.asp,

      var myNumber = '251'
      myNumber.toString(16) // fb

*/
let random = function (min = 0, max = 255) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let randomColor = function () {
    let hex = '#';
    while (hex.length < 6 ) {
        // let color = Math.floor(Math.random()*256).toString(16); // Экономия !!!
        let color = random().toString(16);
        if (color.length < 2) {
            color = '0' + color
        }
        hex += color
    }

    console.log(hex);
    document.body.style.backgroundColor = hex;
    let colorText = document.getElementById("color");
    colorText.textContent = hex;
    colorText.style.color = hex;

};

document.title = "HomeWork 1 Pidhornyi";

let link = document.createElement('link');
link.href = "css/style.css";
link.rel = "stylesheet";
document.head.appendChild(link);

let divHomeWork = document.createElement("div");
divHomeWork.className = "center";
document.body.appendChild(divHomeWork);

let heading = document.createElement("h1");
heading.textContent = "HomeWork 1";
divHomeWork.appendChild(heading);

let divButton = document.createElement("div");
divButton.className = "container center";
document.body.appendChild(divButton);

let button = document.createElement("button");
button.textContent = "RANDOM CoLoR";
button.onclick = randomColor;
divButton.appendChild(button);

let paragraph = document.createElement("p");
paragraph.id = "color";
divButton.appendChild(paragraph);

randomColor();
