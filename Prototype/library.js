var arr = [4, 2, 5, 10, -4, 55];

//   even(callback) - вызывает callback для всех четных элементов массива
Array.prototype.even = function (callback) {
    var innerArr = this;
    innerArr.map(function(i) {
        if (i % 2 === 0) {
            return callback(i);
        }
    });
};

//    odd(callback) - вызывает callback для всех нечетных элементов массива
Array.prototype.odd = function (callback) {
    var innerArr = this;
    innerArr.map(function(i) {
        if (i % 2 !== 0) {
            return callback(i);
        }
    });
};

//     shuffle - возвращает перемешаный массив
Array.prototype.shuffle = function () {
    this.sort(function() {
        return 0.5 - Math.random();
    });
};

var word = '  Beauti   ful Day  wh  ';

//  intrim - удаляет пробелы в начале и конце строки, удаляет повторяющиеся пробелы в середине строки
String.prototype.intrim = function () {
    return this.trim().replace(/\s+/g, ' ');
};

//   reverse - переворачивает строку наоборот
String.prototype.reverse = function () {
    var str = '';
    for (var i = this.length - 1; i >= 0; i--) {
        str += this[i];
    }

    return str;
}

//    isPalindrome - проверяет, является ли строка палиндромом. Использует reverse внутри себя
String.prototype.isPalindrome = function () {
    var str = this.toLowerCase();
    var reverseStr = str.reverse();

    if (str === reverseStr) {
        console.log('Ohh Yeah!');
    } else {
        console.log('Ohhh NO!');
    }
};