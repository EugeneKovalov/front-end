// Написать скрипт, который выводит в консоль дерево DOM тела (body) текущей страницы, задавая отступы с учетом вложенности элементов. Примерный вывод:

var txt = "";

function walkTheDOM(node, txt) {
    node = node.firstChild;

    while (node) {
        if (node.tagName) {
            console.log(txt + node.tagName);
        }
        txt += "-";

        walkTheDOM(node, txt);

        node = node.nextSibling;
        txt = txt.substr(0, txt.length - 1);
    }

}

walkTheDOM(document.body, txt);
