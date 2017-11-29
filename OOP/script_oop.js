// Задача №1

// Описать класс Tank, удовлетворяющий следующим требованиям:
// у tank есть вход для его добавления воды из водопровода и два выхода для перелива воды в другие емкости
// при создании tank задается его ёмкость (л) и скорость наполнения водой при подключении к водопроводу (л/с)
// есть возможность подключать/отключать tank от водопровода
// есть возможность подлючать/отключать потребителей к первому и второму выходам tank
// нельзя подключить потребителя к выходу, если к нему уже подключен другой потребитель
// при подключении потребителя нужно указывать его скорость потребления воды (л/с)
// каждую секунду tank обновляет информацию о себе в консоли в виде ". . . 80%", где первые три символа, разделенных пробелами, обозначают подключение к водопроводу, к первому и ко второму выходам соответственно ("." - не подключено, "@" - поключено), примерный лог может иметь вид:
// . . . 80%
// // подключили tank к водопроводу, что долить воды
// @ . . 81%
// @ . . 82%
// @ . . 83%
// // подключили потребителя к первому входу tank
// @ @ . 84.5%
// @ @ . 85%
// @ @ . 85.5%
// // подключили потребителя ко второму входу tank
// @ @ @ 85.75%
// @ @ @ 86%
// @ @ @ 86.25%
// // отключили tank от водопровода
// . @ @ 85.5%
// . @ @ 84.75%
// . @ @ 84%
// при обновлении информации tank предварительно очищает консоль с помощью console.clear()
// tank нельзя наполнить больше, чем на 100%, и нельзя опустошить ниже 0%
// Реализовать внешний и внутренний интерфейсы.

function Tank(_capacity, _fillingSpeed) {
    this.system = {
        portA: {
            state: '.',
            speed: 0
        },
        portB: {
            state: '.',
            speed: 0
        },
        portC: {
            state: '.',
            speed: 0
        }
    }

    this.timer = function () {}

    var ctx = this;

    this.init = function () {
        this.timer = setInterval(function () {

            var speed = ctx.system.portA.speed - (ctx.system.portB.speed + ctx.system.portC.speed);

            if (_capacity + speed > 0 && _capacity + speed < 100) {
                _capacity += speed;

                console.log(ctx.system.portA.state + ' ' + ctx.system.portB.state + ' ' + ctx.system.portC.state + ' ' + _capacity + '%');
            }

            if (_capacity + speed > 99) {
                _capacity = 100;
                console.log('Full');

                clearTimeout(ctx.timer);
                ctx.timer = undefined;
            }

            if (_capacity + speed < 1) {
                _capacity = 0;
                console.log('Empty :(');

                clearTimeout(ctx.timer);
                ctx.timer = undefined;
            }
        }, 1000);
    }

    this.addOperator = function (port, speed) {
        if (ctx.system[port].state === '.') {
            ctx.system[port].state = '@';
            ctx.system[port].speed = speed;
        }
    }

    this.removeOperator = function (port) {
        if (ctx.system[port].state === '@') {
            ctx.system[port].state = '.';
            ctx.system[port].speed = 0;
        }
    }

    this.startRecoverWater = function () {
        this.system.portA.state = '@';
        this.system.portA.speed = _fillingSpeed;
    }

    this.stopRecoverWater = function () {
        this.system.portA.state = '.';
        this.system.portA.speed = 0;
    }

    this.init();
}

var tank = new Tank(100, 16);
tank.addOperator('portC', 15);
tank.removeOperator('portC');
tank.addOperator('portB', 20);

// Задача №2

// Написать функцию-конструктор Runner с приватным свойством medals, хранящим информацию о медалях. Создать геттер-сеттер, который, при запуске с одним параметром - типом медали - будет возвращать количество медалей данного типа. При запуске с двумя параметрами - типом и количеством - будет увеличивать количество медалей указанного типа на заданную величину.

var Runner = function () {
    var medals = {};

    this.getSetMedals = function () {
        if (arguments.length === 1 && arguments[0] in medals) {
            console.log(medals[arguments[0]]);
        } else if (arguments.length === 2) {
            if (arguments[0] in medals) {
                medals[arguments[0]] += arguments[1];
            } else {
                medals[arguments[0]] = arguments[1];
            }
        }
    }
};

var rabbit = new Runner();
rabbit.getSetMedals('Bronze', 1);
rabbit.getSetMedals('Silver', 2);
rabbit.getSetMedals('Silver');

// Задача №3

// В библиотеке хранятся книги и журналы.
// создайте классы Book и Magazine с необходимыми свойствами ( не менее 5 для каждого класса)
// создайте родительский класс, от которого функционально наследуют Book и Magazine. Перепишите старые классы с учетом наследования. При проектировании классов заложите возможность в будущем добавить класс Newspaper для хранения информации о газетах. В родительский класс добавьте защищенное свойство доступности издания и методы работы с этим свойством.

function Library(title, description, yearRelease, printing) {
    this.title = title;
    this.description = description;
    this.yearRelease = yearRelease;
    this.printing = printing;

    var isAvailable = false;

    function addBooks(howMany) {
        if (howMany > 0) {
            isAvailable = true;
        }
    }
}

function Books(title, description, genre, yearRelease, printing, author) {
    Library.apply(this, arguments);
    this.genre = genre;
    this.author = author;
}

function Magazines(title, description, yearRelease, printing, issueNumber) {
    Library.apply(this, arguments);
    this.issueNumber = issueNumber;
}

var book = new Books('Alice in Wonderland', 'wdd', 'dwd', 1999, 100, 'Ddwd');
var magazine = new Magazines('Retro Gamer', 'wedwd', 2000, 10, 4);

console.log(book.printing);
console.log(magazine.title);

