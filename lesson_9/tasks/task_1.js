/*

    Задание 1:
    Написать скрипт, который по клику на кнопку рандомит цвет и записывает его в localStorage
    После перезагрузки страницы, цвет должен сохранится.

*/

let btn = document.createElement('button');
btn.innerText = 'RANDOM COLOR';
document.body.appendChild(btn);

function random() {
    let hex = '#';
    while (hex.length < 6) {
        let color = Math.floor(Math.random() * 256).toString(16);
        if (color.length < 2) {
            color = '0' + color
        }
        hex += color
    }
    return hex
}

btn.addEventListener('click', function () {
    let color = random();
    localStorage.setItem('backgroundColor', color);
    document.body.style.backgroundColor = color
});

let backgroundColor = localStorage.getItem('backgroundColor');
if( backgroundColor !== null){
    document.body.style.backgroundColor = backgroundColor;
}
