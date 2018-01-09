let initData = {
    limit: Math.ceil(document.documentElement.clientHeight / 300),
    from: 1,
    document: document.documentElement,
    isActive: false
}

function addElements(start, to, days) {
    if (!initData.isActive) {
        initData.isActive = true;
        for (let i = 0; start < to; ++start, i++) {
            let div = document.createElement('div');
            let span = document.createElement('span');

            span.innerText = start + ' : ' + days[i];
            div.setAttribute('class', 'container');
            div.appendChild(span);
            document.body.appendChild(div);
        }
        initData.from = start;
        initData.isActive = false;
        document.head.removeChild(document.getElementById('tmp'));
    }
    document.getElementById('counter').innerText = '' + document.getElementsByClassName('container').length;
}

function update() {
    let elem = document.createElement('script');
    elem.setAttribute('id', 'tmp');
    elem.src = "days.php?from=" + initData.from + "&limit=" + initData.limit;
    document.head.appendChild(elem);
}

update();
initData.limit = 5;

window.onscroll = function() {
    let offset = initData.document.scrollTop + window.innerHeight;
    let height = initData.document.offsetHeight;

    if (offset === height) {
        update();
    }
};