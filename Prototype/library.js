var arr = [4, 2, 5, 10, -4, 55, 3];

//   even(callback) - вызывает callback для всех четных элементов массива
//   если индекс[0] считать четным и тд
Array.prototype.even = function (callback) {
    for (var i = 0; i < this.length; i += 2) {
        callback(this[i]);
    }
};

//   odd(callback) - вызывает callback для всех нечетных элементов массива
//   если индекс[0] считать четным и тд
Array.prototype.odd = function (callback) {
    for (var i = 1; i < this.length; i += 2) {
        callback(this[i]);
    }
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