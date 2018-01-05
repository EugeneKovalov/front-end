let limit = 5;
let from = Math.ceil(document.documentElement.clientHeight / 300);
let initial = Math.ceil(document.documentElement.clientHeight / 300) - 1;

function addElements(days) {
    for (let i = from - initial, j = 0; i < from+limit; i++, j++) {
        let div = document.createElement('div');
        let span = document.createElement('span');
        span.innerText = '' + i + ' : ' + days[j];
        div.setAttribute('class', 'container');
        div.appendChild(span);
        document.body.appendChild(div);
    }
    from += initial + limit;
    document.head.removeChild(document.getElementById('tmp'));
    console.log(document.getElementsByClassName('container').length);
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