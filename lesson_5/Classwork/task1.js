/*

    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/


let Train = {
    name: 'InterCity',
    speed: 0,
    passenger: 0,
    showInfo: function () {
        console.log(`Поезд: ${this.name} \nСкорость: ${this.speed} \nКоличество пассажиров: ${this.passenger}\n>`);
    },
    rides: function (speed) {
        this.speed = speed;
        console.log(`Поезд ${this.name} везет ${this.passenger} со скоростью ${this.speed}\n>`);
    },
    stop: function () {
        this.speed = 0;
        console.log(`Поезд ${this.name} остановился. Скорость ${this.speed}\n>`);
    },
    getPassenger: function (passenger) {
        this.passenger = passenger;
        console.log(`Увеличивает кол-во пассажиров на ${this.passenger}\n>`);
    }
};

Train.showInfo();
Train.getPassenger(500);

Train.showInfo();
Train.rides(180);

Train.showInfo();
Train.stop();

Train.showInfo();
Train.getPassenger(200);

Train.rides(200);
Train.showInfo();

Train.rides(250);
Train.showInfo();
