// https://br3t.github.io/fstk/lesson/javascript_6/index.html

// Задача №1
/* Написать функцию-конструктор для объекта-бегуна. 
Написать статический метод для награждения бегуна. 
При каждом награждении описание медали добавляется в статическую переменную класса, 
а id медали сохраняется в массиве medals объекта. 
При награждении медалью, которой нет в статической переменной, 
она создается и ей назначается id.
*/
var Runner = function() {
    this.medals = [];
};
Runner.description = [];
Runner.giveMedal = function(context, description) {
    if (Runner.description.indexOf(description)) {
        Runner.description.push(description);
    }

    context.medals.push(Runner.description.indexOf(description) + 1);
};

var runner1 = new Runner();
var runner2 = new Runner();
Runner.giveMedal(runner1, 'Gold, 1000 m');
Runner.giveMedal(runner1, 'Silver, 500 m');
console.log(runner1.medals); // 1,2
Runner.giveMedal(runner2, 'Silver, 500 m');
console.log(runner2.medals); // 2

// Задача №2
/* Написать функцию-конструктор Car, 
создающую объект-автомобиль заданной марки с 4 колесами. 
Добавить фабричные методы для добавления трёх- и восьмиколесных автомобилей.
*/
var Car = function(brand) {
    this.brand = brand;
    this.wheels = 4;
};

Car.threeWheelsCar = function(brand) {
    var threeWheelCar = new Car(brand);
    threeWheelCar.wheels = 3;
    return threeWheelCar;
};

Car.eightWheelsCar = function(brand) {
    var eightWheelsVeryStrangeCar = new Car(brand);
    eightWheelsVeryStrangeCar.wheels = 8;
    return eightWheelsVeryStrangeCar;
};

var bycicleCar = Car.threeWheelsCar('Velosiped s kolyaskoy');
console.log(bycicleCar);

// Задача №3
/* Написать функцию-конструктор, 
которая создает объект-бегуна с полями "имя" и "медали". 
Написать ещё одну функцию-конструктор, 
создающую объект-игрока в лотерею с полями "количество купленных билетов", 
"количество выигранных денег". Добавить игроку метод для выдачи ему денежного приза. 
Использовать данный метод для выдачи денежного приза бегуну, используя call.
*/

var Runner = function(name, medals) {
    this.name = name;
    this.medals = medals;
};

var Player = function(tickets) {
    this.tickets = tickets;

    this.setMoney = function(money) {
        this.wonMoney = money;
    };
};

var rabbit = new Runner('Bugs', 5);
var gambleCreature = new Player(2);
gambleCreature.setMoney.call(rabbit, 25);

console.log(rabbit);

// Задача №4
/* Создать псевдо-массив Arr длинной 5, 
заполенный произвольными целыми числами от 10 до 99, и методом sort, 
сортирующим Arr по возрастанию остатков от деления на 10 его элеметов. 
С помощью одалживания метода sort отсортировать элементы по убыванию. 
Одалживать метод под тем же именем и на время одалживания сохранить имеющийся метод. 
После сортировки вернуть sortсохраненный метод.
*/

var Arr = {
    0: Math.floor(Math.random() * (99 - 10)) + 10,
    1: Math.floor(Math.random() * (99 - 10)) + 10,
    2: Math.floor(Math.random() * (99 - 10)) + 10,
    3: Math.floor(Math.random() * (99 - 10)) + 10,
    4: Math.floor(Math.random() * (99 - 10)) + 10,
    length: 5,

    sort: function() {
        return Array.prototype.sort.apply(Arr, [function(a, b) {
            return (a % 10) - (b % 10);
        }]);
    }
};

// initial
console.log("1 - ", Arr);

// initial custom sorted
console.log("2 - ", Arr.sort());

// switching sort between custom and original array sort
var mySortFunc = Arr.sort;
Arr.sort = Array.prototype.sort;

// original descending sort
console.log("3 - ", Arr.sort(function(a, b) {
    return b - a;
}));

// backening custom sort
Arr.sort = mySortFunc;

// check if custom sort is ok
console.log("4 - ", Arr.sort());

// Задача №5
/* Добавить декоратор для метода Math.max, который, в случае, 
если какие-то из элементов строки, заменял их на длину этих строк; 
если какие-то из элементов объекты - возвращает первое найденное числовое свойство или 0.
*/

var decorator = function(f) {
    return function() {
        for (var i = 0; i < arguments.length; i++) {
            var elem = arguments[i];
            if (typeof elem != 'number') {
                switch (typeof elem) {
                    case 'string':
                        arguments[i] = elem.length;
                        break;
                    case 'object':
                        arguments[i] = 0;
                        for (var prop in elem) {
                            if (typeof elem[prop] == 'number') {
                                arguments[i] = elem[prop];
                                break;
                            }
                        }
                        break;
                    default:
                        arguments[i] = 0;
                        break;
                }
            }
        }
        console.log(arguments);
        return f.apply(decorator, arguments);
    };
};

Math.max = decorator(Math.max);

console.log(Math.max(
    1,
    2,
    'abc', { a: 'de', b: 7 }
)); // 3

console.log(Math.max(
    1,
    2,
    'abc', { a: 'd', b: 'adwd' }
)); // 3