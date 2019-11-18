/*

  Задание "Шифр цезаря":

    https://uk.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F

    Написать функцию, которая будет принимать в себя слово и количество
    симовлов на которые нужно сделать сдвиг внутри.

    Написать функцию дешефратор которая вернет слово в изначальный вид.

    Сделать статичные функции используя bind и метод частичного
    вызова функции (каррирования), которая будет создавать и дешефровать
    слова с статично забитым шагом от одного до 5.


    const isMobile = document.innerWidth < 768;

    Например:
      encryptCesar( 3, 'Word');
      encryptCesar1(...)
      ...
      encryptCesar5(...)

      decryptCesar1(3, 'Sdwq');
      decryptCesar1(...)
      ...
      decryptCesar5(...)

      "а".charCodeAt(); // 1072
      String.fromCharCode(189, 43, 190, 61) // ½+¾

*/
let button = document.querySelectorAll('button');
let resultText = document.getElementById('ResultText');

function Cesar(crypt, text, step) {
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let c = text[i];

        if (c.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            if (crypt === "Encrypt") {
                if ((code >= 65) && (code <= 90)) {
                    c = String.fromCharCode(((code - 65 + step) % 26) + 65)
                } else if ((code >= 97) && (code <= 122)) {
                    c = String.fromCharCode(((code - 97 + step) % 26) + 97)
                }
            } else if (crypt === "Decrypt") {
                if ((code >= 65) && (code <= 90)) {
                    c = String.fromCharCode(((code - 65 - step) % 26) + 65)
                } else if ((code >= 97) && (code <= 122)) {
                    c = String.fromCharCode(((code - 97 - step) % 26) + 97)
                }
            }
        }
        result += c;
    }
    resultText.innerText = result;
}

button.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        let step = Number(document.getElementById('Step').value);
        let text = String(document.getElementById('Text').value);
        let crypt = event.target.innerText;
        if (step < 0) {
            Cesar(crypt, text, step + 26);
        } else {
            Cesar(crypt, text, step)
        }
    })
});
