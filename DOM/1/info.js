// Написать скрипт, подключаемый к странице. При переходе на такую страницу в body будут последовательно добавляться и отображаться сообщения из notifications.js. Цвет фона сообщения зависит от его типа. Сначала появляется первое сообщение, отображается в течение 3 секунд, затем исчезает (удаляется из DOM) и за ним появляется новое и т.д.

var mainElement = document.body;
var textElem = document.createElement('my-tag');

for(var i = 0; i < notifications.length; i++) {
    messageLifeCycle(notifications[i], i);
    textElem.remove();
}

function messageLifeCycle(notif, i) {
    (function(i) {
        setTimeout(function() {
            if (notif.type === 'error') {
                textElem.style.backgroundColor = '#F30F18';
            } else if (notif.type === 'warn') {
                textElem.style.backgroundColor = '#0000FF';
            } else if (notif.type === 'info') {
                textElem.style.backgroundColor = '#1FBBD8';
            }
            textElem.innerText = notif.message;
            mainElement.appendChild(textElem);
        }, 3000 * i);
    })(i)
}