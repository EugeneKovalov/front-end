// Написать скрипт, который выводит в консоль дерево DOM тела (body) текущей страницы, задавая отступы с учетом вложенности элементов. Примерный вывод:

var txt = "";

function walkTheDOM(node, txt) {
    node = node.firstChild;

    while (node) {
        if (node.nodeType === 1) {
            console.log(txt + node.tagName);
        } else if (node.nodeType === 3) {
            console.log(txt + '#TEXT ' + node.textContent);
        } else if (node.nodeType === 8) {
            console.log(txt + '#COMMENT');
        }
        txt += "-";

        walkTheDOM(node, txt);

        node = node.nextSibling;
        txt = txt.substr(0, txt.length - 1);
    }
}

walkTheDOM(document.body, txt);
