// 1
var mike = {
    weight: 75,
    petName: 'Goofie',
    hasJob: true,
    isMarried: false
};
var shawn = {
    weight: 90,
    isHomeless: false,
    petName: 'Stoney'
};

function mergeObjects(obj1, obj2) {
    // var obj = {};
    // var lowestObj = {};
    //
    // if (Object.keys(obj1).length >= Object.keys(obj2).length) {
    //     obj = obj1;
    //     lowestObj = obj2;
    // } else {
    //     obj = obj2;
    //     lowestObj = obj1;
    // }
    //
    // for (var prop in lowestObj) {
    //     if (!obj.hasOwnProperty(prop)) {
    //         obj[prop] = lowestObj[prop];
    //     }
    //
    //     for (var prop2 in obj) {
    //         if (prop === prop2) {
    //             obj[prop2] = lowestObj[prop];
    //             break;
    //         }
    //     }
    // }


    let obj = {};
    for (let prop in obj1) {
        obj[prop] = obj1[prop];
    }

    for (var prop in obj2) {
        if (!obj[prop]) {
            obj[prop] = obj2[prop];
        }

        for (var prop2 in obj) {
            if (prop === prop2) {
                obj[prop2] = obj2[prop];
                break;
            }
        }
    }

    return obj;
}

console.log(mergeObjects(shawn, mike));

// 2
var sportsmen = [
    {name: "Yan", age: 33},
    {name: "Ben", age: 45},
    {name: "Sam", age: 60},
    {name: "Jeremy", age: 89},
    {name: "Katy", age: 12}
];

function topOldest(menlist, limit) {
    var winners = [];

    menlist.sort(function (a, b) {
        if (a.age > b.age)
            return -1;
        if (a.age < b.age)
            return 1;
        return 0;
    });

    for (var i = 0; i < limit; i++) {
        winners.push(menlist[i].name);
    }

    return winners;
}

console.log(topOldest(sportsmen, 3));


// Задача №3. Награждение

// Есть данные о спортсменах, информация о каждом спортсмене хранится в своей переменной типа "объект". Необходимо написать функцию, которая будет принимать 3 параметра: спортсмена, тип медали (строка) и количество медалей (целое положительное число). При запуске этой функции у спорстмена должно увеличиться количество медалей указанного типа на заданное число. Информация о типе и количестве медалей хранится в свойствах внутреннего объекта medals объекта спортсмена. Следует учесть, что в у спортсмена до запуска функции может не быть медалей заданного типа или не быть медалей вообще. Примерный результирующий вывод в консоль приведен ниже:

var runner1 = {
    medals: {
        gold: 0,
        silver: 2,
        bronze: 1
    }
};
var runner2 = {
    medals: {
        gold: 4,
        bronze: 1
    }
};
var runner3 = { };

function giveMedals(winner, medal, howMany) {
    if (!winner.medals) {
        winner.medals = {};
    }

    if (!winner.medals[medal]) {
        winner.medals[medal] = howMany;
    } else {
        winner.medals[medal] += howMany;
    }
}

console.log(runner3);

giveMedals(runner3, 'silver', 2);
console.log(runner3);

giveMedals(runner3, 'bronze', 3);
console.log(runner3);

giveMedals(runner3, 'silver', 3);
console.log(runner3);

giveMedals(runner3, 'gold', 1);
console.log(runner3);

// Создать объект spammer с двумя методами startSpam и stopSpam. При передаче методу startSpam некой строки он каждую секунду выводит в консоль (console.log) эту строку. При повторном запуске с другой строкой первая строка продолжает выводиться, а новая строка выводится отдельным console.log. Запуск метода stopSpam с параметром в виде строки находит эту строку среди выводимых в консоль и останавливает "спам" этой строки. Примерный результирующий вывод в консоль с расшифровкой по времени приведен ниже:
// >spammer.startSpam('first');
// first // 00:00:01
// first // 00:00:02
// >spammer.startSpam('second');
// first // 00:00:03
// second // 00:00:03
// first // 00:00:04
// second // 00:00:04
// >spammer.stopSpam('first');
// second // 00:00:05
// second // 00:00:06

var spammer = {
    spamText: [],
    timer: function () {},

    startSpam: function (message) {
        this.spamText.push(message);
        clearTimeout(this.timer);

        this.timer = setInterval(function () {
            spammer.spamText.forEach(function(item) {
                console.log(item);
            });
        }, 1000);
    },

    stopSpam: function (message) {
        this.spamText.splice(this.spamText.indexOf(message), 1);
    },
};

// spammer.startSpam("ddw");
// spammer.startSpam("1");
// spammer.stopSpam("1");
// spammer.startSpam("2");
// spammer.stopSpam("2");
// spammer.stopSpam("ddw");
// spammer.startSpam("d");


// Написать функцию, которая на вход будет принимать тектовую строку и будет возвращать "улучшенный" текст: буквы должны комбинировать регистр в произвольном порядке, а после каждого слова должен быть один из смайлов: :) ;) (: :p :D :-*. Строка на входе содержит только буквы русского алфавита и некоторые знаки препинания (. , ? ! ;). Примерный результирующий вывод в консоль приведен ниже:
//
//     >beautify("Всем привет, как дела?");
// ВСеМ(: пРивЕт:D, КаК;) ДеЛа(:?

function beautify(str) {
    var arr = str.split(' ');
    var emojiArr = [':)', ';)', '(:', ':P', ':D', ':-*'];

    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (j === getRandomArbitrary(0, arr[i].length)) {
                arr[i] = arr[i].substring(0, j) + arr[i][j].toUpperCase() + arr[i].substring(j + 1, arr[i].length);
            }
        }

        if (arr[i].charAt(arr[i].length-1) === '!' || arr[i].charAt(arr[i].length-1) === '.'
            || arr[i].charAt(arr[i].length-1) === ',' || arr[i].charAt(arr[i].length-1) === '?') {

            arr[i] = arr[i].substring(0, arr[i].length - 1) +
                emojiArr[getRandomArbitrary(0, emojiArr.length)] +
                arr[i].substring(arr[i].length - 1, arr[i].length);
        } else {
            arr[i] += emojiArr[getRandomArbitrary(0, emojiArr.length)]
        }
    }

    return arr.join(' ');
}

console.log(beautify("Всем привет, как дела?"));

let symbolsArr = [
    'a', 'b', 'c',
    '1', '2', '3', '4', '5', '6', '7', '8', '9'];

