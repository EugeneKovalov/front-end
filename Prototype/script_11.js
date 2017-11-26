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
};

Cat.prototype = pet;
Cat.prototype.meow = function () {
    console.log('RRRRROOOOOAAAARRR! Yes, I\'m lion, not a some pussycat')
}

var Dog = function() {
    this.furType = "strong raw type fur";
    this.tailLength = "Super fast tail! Can be used as a helicopter propeller.";

    this.bark = function() {
        return 'Woof-woof! ' + ' - very deep bass sound';
    };
};

Dog.prototype = pet;
Dog.prototype.bark = function () {
    console.log('Woof-woof! - very deep bass sound');
}

var pussycat = new Cat();

console.dir(pussycat.meow());
console.dir(pussycat.walk());


// Задача №2

// Дана функция-конструктор цыпленка. Перепишите конструктор для добавления методов в прототипном стиле.
var Chicken = function(name, sex) {
    this.name = name;
    this.getSex = function () {
        return sex;
        };
    };

Chicken.prototype.produceEgg = function () {
    if (this.getSex() !== 'male') {
        var egg = { type: null };
        return egg;
    } else {
        Chicken.prototype.crow = function() {
            console.log("Cock-A-Doodle-Doo!");
        };
    }
}

var bobChicken = new Chicken('Bob', 'male');
var sheilaChicken = new Chicken('Sheila', 'female');

console.log(sheilaChicken.produceEgg());

console.log(bobChicken.produceEgg());
console.log(bobChicken.crow());