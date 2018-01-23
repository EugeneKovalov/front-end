const cellCollection = document.getElementsByClassName('ttt-game');
const easyBtn = document.getElementById('easy-start');
const hardBtn = document.getElementById('hard-start');

let footer = document.getElementById('footer');
let field = document.getElementById('field');
let player = 'X';
let ai = 'O';

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

let init = () => {
    swap();

    footer.style.visibility = 'hidden';
    field.style.display = 'none';

    easyBtn.style.visibility = 'visible';
    hardBtn.style.visibility = 'visible';

    for (let i = 0; i < cellCollection.length; i++) {
        cellCollection[i].innerText = '';
    }
}

function swap() {
    let tmp = player;
    player = ai;
    ai = tmp;
}

function setup(turn) {
    footer.style.visibility = 'visible';
    field.style.display = 'table';

    for (let i = 0; i < cellCollection.length; i++) {
        cellCollection[i].addEventListener('click', turn);
    }
}

const checkConditions = () => {
    for (let i = 0; i < winConditions.length; i++) {
        const winCond = winConditions[i];

        let moves = winCond.map((pos) => {
            return cellCollection[pos].textContent;
        });

        if (moves[2] !== '' && moves.every((val, i, arr) => val === arr[0])) {
            if (checkConditions && moves[0] === player) {
                alert('U WIN! Game Ended. Push replay button');
                document.getElementById('easy-start').style.visibility = 'hidden';
                document.getElementById('hard-start').style.visibility = 'hidden';
                field.style.display = 'none';
                return;
            } else {
                alert('U LOOSE! Game Ended. Push replay button');
                field.style.display = 'none';
                return;
            }
        }
    }

    let cellArray = Array.from(cellCollection);
    if (cellArray.every((val, i, arr) => val.textContent !== '')) {
        alert('DRAW!!! Game Ended. Push replay button');
    }
}

function easyGame() {
    const turn = (e) => {
        if (e.target.innerText === '') {
            e.target.innerText = player;

            for (let i = 0; i < cellCollection.length; i++) {
                if (cellCollection[i].innerText === '') {
                    cellCollection[i].innerText = ai;
                    break;
                }
            }
            checkConditions();
        }
    }

    setup(turn);
}

function hardGame() {
    const turn = (e) => {
        if (e.target.innerText === '') {
            e.target.innerText = player;
            let aiTurn = {
                id: null,
                lvl: 3
            };

            for (let i = 0; i < winConditions.length; i++) {
                const winCond = winConditions[i];

                let moves = [{}];
                moves = winCond.map((pos) => {
                    return {
                        id: cellCollection[pos].id,
                        number: cellCollection[pos].textContent
                    };
                });

                if (moves[0].number === player && moves[1].number === player ||
                    moves[0].number === player && moves[2].number === player ||
                    moves[1].number === player && moves[2].number === player ) {

                    for (let j = 0; j < moves.length; j++) {
                        if (moves[j].number === '') {
                            console.log('1');
                            aiTurn.id = moves[j].id;
                            aiTurn.lvl = 1;
                            break;
                        }
                    }
                } else if (moves[0].number === ai && moves[1].number === ai ||
                    moves[0].number === ai && moves[2].number === ai ||
                    moves[1].number === ai && moves[2].number === ai ) {

                    for (let j = 0; j < moves.length; j++) {
                        if (moves[j].number === '') {
                            if (aiTurn.lvl > 1) {
                                aiTurn.id = moves[j].id;
                                aiTurn.lvl = 2;
                            }
                            break;
                        }
                    }
                } else if (moves[0].number === ai || moves[0].number === '' &&
                    moves[1].number === ai || moves[1].number === '' &&
                    moves[2].number === ai || moves[2].number === '') {

                    for (let j = 0; j < moves.length; j++) {
                        if (moves[j].number === '') {
                            console.log('3');
                            if (aiTurn.lvl > 2) {
                                aiTurn.id = moves[j].id;
                                aiTurn.lvl = 3;
                            }
                            break;
                        }
                    }
                }
            }
            checkConditions();

            cellCollection[aiTurn.id].innerText = ai;
        }
    }

    setup(turn);
}

init();

document.getElementById('replay').addEventListener('click', init);
easyBtn.addEventListener('click', easyGame);
hardBtn.addEventListener('click', hardGame);