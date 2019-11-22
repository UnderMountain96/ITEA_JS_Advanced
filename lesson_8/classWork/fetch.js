/*
  Задача:

  1. При помощи fetch получить данные:
     http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2

  2. Полученый ответ преобразовать в json вызвав метод .json с объекта ответа
  3. Выбрать случайного человека и передать в следующий чейн промиса
  4. Сделать дополнительный запрос на получение списка друзей человека
     http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2
     И дальше передать обьект:
      {
        name: userName,
        ...
        friends: friendsData
      }

     Подсказка нужно вызвать дополнительный fecth из текущего чейна.
     Для того что бы передать результат выполнения доп. запроса
     в наш первый промис используйте констуркцию:

      .then(
        response1 => {
          return fetch(...)
            .then(
              response2 => {
                ...
                формируете обьект в котором будут данные человека с
                первого запроса, например его name response1.name
                и друзья которые пришли из доп. запроса
              }
            )
        }
      )

  5. Вывести результат на страничку

  + Бонус. Для конвертации обьекта response в json использовать одну
    функцию.

*/

let url = 'http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2';
let url2 = 'http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2';

function convert(res) {
    return res.json()
}

const f = fetch(url)
    .then(
        (res) => {
            return convert(res)
        })
    .then(
        (res) => {
            return res[Math.floor(Math.random() * 9)];
        })
    .then(
        (name) => {
            return fetch(url2)
                .then(
                    (res) => {
                        return convert(res)
                    })
                .then(
                    (res) => {
                        let user = {
                            name: name.name,
                            friends: res[0].friends
                        };
                        console.log(user);
                        return user;
                    });
        });

async function text() {
    let json = await f;
    document.body.innerText = `name:\n ${JSON.stringify(json.name)}\n\n`;
    document.body.innerText += `friends:\n`;
    json.friends.forEach(function (i) {
        document.body.innerText += `${JSON.stringify(i.name)}\n`;
    })
}

text()
