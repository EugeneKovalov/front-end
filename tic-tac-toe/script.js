let cells = document.getElementsByClassName('ttt-game');
let cellArray = [];

for (let i = 0, j = 0; i < cells.length; i++) {
    if ((i+1) % 3 === 0) {
        cellArray.push([]);

        cellArray[j][0] = cells[i-2];
        cellArray[j][1] = cells[i-1];
        cellArray[j][2] = cells[i];
        j++;
    }
}

console.log(cellArray);