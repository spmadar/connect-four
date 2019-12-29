const c4Board = document.getElementById("connectBoard");
var isRedsTurn = true;

// represets connect 4 board as a list of columns 
// forms a 2D array 7x6 (rotate ccw)
const board = [
    ["E","E","E","E","E","E"],
    ["E","E","E","E","E","E"],
    ["E","E","E","E","E","E"],
    ["E","E","E","E","E","E"],
    ["E","E","E","E","E","E"],
    ["E","E","E","E","E","E"],
    ["E","E","E","E","E","E"],
];

for (let col = 0; col < board.length; col++) {
    let column = document.createElement("div");
    column.id = col.toString(); 
    column.classList.add("column");
    for (let row = 0; row < board[col].length; row++) {
        let cell = document.createElement("div");
        cell.classList.add("empty","cell");
        cell.addEventListener("click", moveChip);
        column.appendChild(cell);
    }
    c4Board.appendChild(column);
}

function moveChip(event) {
    let cell = event.target;
    let parent = cell.parentElement;
    let col = Number(parent.id)
    console.log("got event: " + col);

    // use col to index into 'board'
    column = board[col];
    let color = "Y";
    if (isRedsTurn) {
        color = "R";
    }
    for (let i=0; i < column.length; i++) {
        if (column[i] == "E") {
            column[i] = color;
            break;
        }
    }
    isRedsTurn = !isRedsTurn;
    console.log(board);
}

function printBoard () {
    for (let col = 0; col < board.length; col++) {
        for (let row = 0; row < board[col].length; row++) {
            
        }
    }
}