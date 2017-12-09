let from = 0;
let limit = 3;

let initial = Math.ceil(document.documentElement.clientHeight / 300);

for (var i = 0; i < initial; i++) {
    let el = document.createElement('div');
    el.setAttribute('class', 'container');
    document.body.appendChild(el);
}

function loadData(start, from) {

}