// Задача №2
// Написать скрипт, подключаемый к странице. При переходе на такую страницу с параметрами адресной строки, например, с page.html?id=2&color=fdd на странице скриптом находился блок с классом "highlight" и с data-id равным 2, и фоновый цвет этого блока становился "#FDD".
var queryStr = window.location.search;

if (queryStr.indexOf('color') && queryStr.indexOf('id')) {
    // some weird calculations for check any id
    var id = queryStr.substr(
        queryStr.indexOf('id') + 3,
        (queryStr.indexOf('color') - 4) - queryStr.indexOf('id'));
    var color = queryStr.substr(queryStr.indexOf('color') + 6);

    var sections = document.getElementsByTagName('section');

    for (var i = 0; i < sections.length; i++) {
        if (id === sections[i].getAttribute('data-id')) {
            sections[i].style.backgroundColor = '#' + color;
        }
    }
}