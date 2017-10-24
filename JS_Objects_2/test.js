// 1 Почему при вызове с другим параметром значение имени пользователя не изменилось? Как исправить код?

let user = {};
let newFirstName = "boris";
let newFirstName2 = "basil";
function setNewName(givenName) {
    let capitalizedName = newFirstName[0].toUpperCase() +
        givenName.substr(1);
    let prettyfiedName = "-=" + capitalizedName + "=-";
    this.name = prettyfiedName;
}
user.setNewName = setNewName;
user.setNewName(newFirstName); // user.name = "-=Boris=-", OK
console.log(user.name);
user.setNewName(newFirstName2); // user.name = "-=Boris=-", ???
console.log(user.name);


// 2 Написать функцию-конструктор, все созданные объекты которой равны между собой.
let Obj = {};
let Clone = function() {
    return Obj;
};
let clone1 = new Clone;
let clone2 = new Clone;

console.log(clone1 == clone2);

// Задача №3. Спам 2.0

// Написать функцию-конструктор, которая принимает один параметр - время в миллисекундах, и записывает в свойства возвращаемого объекта-спамера. У объекта также есть метод startSpam, которому передается строка для спама. После вызова метода спамер с указанным временным промежутком спамит в консоль.Примерный результирующий вывод в консоль с расшифровкой по времени приведен ниже:
let Spammer = function(interval) {
    return spammer = {
        startSpam: function (message) {
            setInterval(function () {
                console.log(message);
            }, interval);
        }
    };
};

// let spammer1 = new Spammer(1000);
// spammer1.startSpam('first');
// first // 00:00:01
// first // 00:00:02
//
// let spammer2 = new Spammer(2000);
// spammer2.startSpam('second');

// first // 00:00:03
// first // 00:00:04
// second // 00:00:04
// first // 00:00:05
// first // 00:00:06
// second // 00:00:06

//Задача №4

// Написать функцию-конструктор, которая принимает три параметра: тип домашнего животного, кличку (строки) и год рождения (целое). У созданного объекта:
//     нельзя изменить тип и год рождения
// год рождения не отображается при переборе через for-in
//     свойство info отображает строку вида "ТИП КЛИЧКА: ВОЗРАСТ лет"


let Pet = function (type, name, yearBorn) {
    Object.defineProperty(this, 'type', {
        enumerable: true,
        configurable: false,
        writable: false,
        value: type
    });

    this.name = name;

    Object.defineProperty(this, 'yearBorn', {
        enumerable: false,
        configurable: true,
        writable: false,
        value: yearBorn
    });

    Object.defineProperty(this, 'info', {
        get: function() {
            return this.type + ' '
                + this.name + ': '
                + new Date().getYear() - this.yearBorn + ' years';
            },
        enumerable: false,
        configurable: true
    });

    Object.defineProperty(this, "info", {
        get: function () {
            let currentYear = new Date().getFullYear();
            let age = currentYear - this.yearBorn;
            return this.type + " " + this.name + ": " + age + " years";
        }
    });
};
let myPet = new Pet("cat", "Barsik", 2015);
for(let key in myPet) { console.log(key); } // type, name
myPet.type = "dog";
myPet.name = "Murzik";
myPet.birthYear = 1700;
console.log(myPet.info); // "cat Murzik: 2 years"

// Задача №5

// Написать функцию-конструктор, которая принимает параметр год и записывает его в свойство объекта. У созданного объекта:
//     при работе как со строкой выводится дополнительная информация, високосный год или нет
// при работе как с числом выводится только значение года

let Years = function(name) {

};
let year = new Years(2017);
alert(year); // "2017, не високосный"
2017 - year // 0