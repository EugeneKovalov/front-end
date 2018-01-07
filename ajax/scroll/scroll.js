let limit = Math.ceil(document.documentElement.clientHeight / 300);
let from = 1;

function addElements(start, to, days) {
    for (let i = start, j = 0; i < to; i++, j++) {
        let div = document.createElement('div');
        let span = document.createElement('span');

        span.innerText = '' + i + ' : ' + days[j];

        div.setAttribute('class', 'container');
        div.appendChild(span);
        document.body.appendChild(div);
    }
    from = start;
    limit = 5;

    document.head.removeChild(document.getElementById('tmp'));
    document.getElementById('counter').innerText = '' + document.getElementsByClassName('container').length;
}

function update() {
    let elem = document.createElement("script");
    elem.setAttribute('id', 'tmp');
    elem.src = "days.php?from=" + from + "&limit=" + limit;
    document.head.appendChild(elem);
}

update();

window.onscroll = function() {
    let doc = document.documentElement;
    let offset = doc.scrollTop + window.innerHeight;
    let height = doc.offsetHeight;

    if (offset === height) {
        update();
    }
};