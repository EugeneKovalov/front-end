const cellArray = document.getElementsByClassName('ttt-game');
let footer = document.getElementById('footer');
let field = document.getElementById('field');

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let player = 'X';
let ai = 'O';

const playerMove = (e) => {
    console.log(e.srcElement);
    e.target.innerText = player;
}

let init = () => {
    swap();

    footer.style.visibility = 'hidden';
    field.style.display = 'none';

    for (let i = 0; i < cellArray.length; i++) {
        cellArray[i].innerText = '';
        cellArray[i].addEventListener('click', playerMove)
    }
}

function swap() {
    let tmp = player;
    player = ai;
    ai = tmp;
}

function easyGame() {
    footer.style.visibility = 'visible';
    field.style.display = 'table';
}

function hardGame() {
    footer.style.visibility = 'visible';
    field.style.display = 'table';
}

init();

document.getElementById('replay').addEventListener('click', init);
document.getElementById('easy-start').addEventListener('click', easyGame);
document.getElementById('hard-start').addEventListener('click', hardGame);