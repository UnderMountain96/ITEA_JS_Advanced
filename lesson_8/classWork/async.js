/*

  Задание:

    Написать при помощи async-await скрипт, который:

    Получает список компаний:  http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2
    Перебирает, выводит табличку:

    # | Company  | Balance | Показать дату регистрации | Показать адресс |
    1.| CompName | 2000$   | button                    | button
    2.| CompName | 2000$   | 20/10/2019                | button
    3.| CompName | 2000$   | button                    | button
    4.| CompName | 2000$   | button                    | button

    Данные о дате регистрации и адресс скрывать при выводе и показывать при клике.

*/

let url = 'http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2';
let table = document.getElementById('table');

function convert(res) {
    return res.json()
}

function active(event) {
    console.dir(event.target.parentElement.children)
    event.target.parentElement.children[0].classList.toggle('hidden');
    event.target.parentElement.children[1].classList.toggle('hidden');
}

async function tableFunc() {
    let json = await fetch(url)
        .then(
            (res) => {
                return convert(res)
            });
    json.forEach(function (obj) {
        let row = `
        <tr>
            <td>${obj.company}</td>
            <td>${obj.balance}</td>
            <td>
            <button onclick="active(event)">SHOW</button>
            <div onclick="active(event)" class="hidden">${obj.registered}</div>
            </td>
            <td>
            <button onclick="active(event)">SHOW</button>
            <div onclick="active(event)" class="hidden">
            City: ${obj.address.city},
            country: ${obj.address.country},
            house: ${obj.address.house},
            state: ${obj.address.state},
            street: ${obj.address.street},
            zip: ${obj.address.zip}.
            </div>
            </td>
        </tr>`;
        table.innerHTML += row
    })
}

tableFunc();


