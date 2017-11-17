// Задача №1

// Создать объект pet со свойствами name и age и методами walk и sleep. Создать классы Cat и Dog с собственными свойствами furType и tailLength и с методами bark и meow соответственно. Использовать прототипное наследование.
var pet = {
    name: '',
    age: 0,

    walk: function() {
        return 'these boots are made for walking';
    },

    sleep: function() {
        return 'alright, that\'s enough. I\'m off.';
    }
};

var Cat = function() {
    this.furType = "NiceTouch kitty";
    this.tailLength = "A gr8 tail, btw not a tail as a story.";

    this.meow = function() {
        return 'RRRRROOOOOAAAARRR! ' + ' Yes, I\'m lion, not a some pussycat';
    };

    this.__proto__ = pet;
};

var Dog = function() {
    this.furType = "strong raw type fur";
    this.tailLength = "Super fast tail! Can be used as a helicopter propeller.";

    this.bark = function() {
        return 'Woof-woof! ' + ' - very deep bass sound';
    };

    this.__proto__ = pet;
};

var pussycat = new Cat();

console.dir(pussycat.meow());
console.dir(pussycat.walk());


// Задача №2

// Дана функция-конструктор цыпленка. Перепишите конструктор для добавления методов в прототипном стиле.
var Chicken = function(name, sex) {
    this.name = name;
    if (sex == "male") {
        this.crow = function() {
            alert("Cock-A-Doodle-Doo!");
        };
    } else {
        this.produceEgg = function() {
            var egg = { type: null };
            return egg;
        };
    }
    this.getSex = function() {
        return sex;
    };
};
// Chicken.prototype.constructor = Chicken;

Chicken.prototype.head = 2;
// console.log(Chicken);
var bobChicken = new Chicken('ff', 'd');

console.log(bobChicken);