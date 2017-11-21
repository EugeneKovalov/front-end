// Написать скрипт, который выводит в консоль дерево DOM тела (body) текущей страницы, задавая отступы с учетом вложенности элементов. Примерный вывод:
//     #text:
//     H1
//     - #text: Домашнее задание по JavaScript в браузере. DOM
// SECTION
// - #text:
//     - H2
// -- #text: Задача №1
// - #text
// - P
window.onload = function() {
    function walkTheDOM(node, callback) {
        callback(node);
        node = node.firstChild;

        while (node) {
            walkTheDOM(node, callback);
            node = node.nextSibling;
        }
    }

    var txt = "";
    walkTheDOM(document.body, function (node) {
        "use strict";
        console.log(txt + node.tagName);

        if(node.hasChildNodes()) {
            txt += "-";
        } else {
            txt = "";
        }
    });


    // var mainElement = document.body.firstElementChild;
    // while(mainElement.nextSibling) {
    //     console.log(mainElement.tagName);
    //
    //     for (var i = 0; i < mainElement.childElementCount; i++) {
    //
    //     }
    //     mainElement = mainElement.nextSibling;
    // }
};
