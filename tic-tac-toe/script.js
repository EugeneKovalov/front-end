const cellArray = document.getElementsByClassName('ttt-game');

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

const start = () => {
    swap();

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

start();

document.getElementById('replay').addEventListener('click', start);