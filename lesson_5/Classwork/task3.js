/*

    Задание 3:

    1. Создать ф-ю констурктор которая создаст новую собаку у которой есть имя и порода
    2. Обьект должен иметь пару свойств (Имя, порода, status)
    3. Функцию которая производит манипуляцию со свойствами (Собака бежит), (Собака есть)
    4. Функция которая перебором выводит все свойства


    Dog {
      name: '',
      breed: '',
      status: 'idle',

      changeStatus: function(){...},
      showProps: function(){...}
    }

    // Перебор свойств и методов обьекта
    for (key in obj) {
      console.log( key, obj[key] );
      /* ... делать что-то с obj[key] ...
    // }
*/

let Dog = {
    name: '',
    breed: '',
    status: '',

    changeStatus: function(status){
        this.status = status
    },
    showProps: function () {
        for (i in this) {
            console.log( i, this[i] )
        }
    }
};

let createDog = function (name, breed) {
    Dog.name = name;
    Dog.breed = breed;
    };


createDog('Дружок', 'Такса');
Dog.showProps();
Dog.changeStatus('Собака бежит');
Dog.showProps();
Dog.changeStatus('Собака есть');
Dog.showProps();