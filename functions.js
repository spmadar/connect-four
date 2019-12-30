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
        cell.classList.add("cellempty","cell");
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
    let className = "cellyellow";
    if (isRedsTurn) {
        color = "R";
        className = "cellred";
    }
    for (let i=0; i < column.length; i++) {
        if (column[i] == "E") {
            column[i] = color;
            cellDiv = parent.childNodes.item((column.length-1)-i);
            cellDiv.className = className;
            break;
        }
    }
    isRedsTurn = !isRedsTurn;
    checkWin();
}

function checkWin() {
    if (checkRowWin()){
        alert("You win!")
    }
}


function checkArrWin(arr) {
    // arr is an array of "E", "R", "Y"
    for (let i=0; i <= arr.length-4; i++) {
        if (arr[i] !== "E" &&
            arr[i] == arr[i+1] && 
            arr[i+1] == arr[i+2] &&
            arr[i+2] == arr[i+3] 
            )
        return true;
    }
    return false;
}

function checkRowWin() {
    const numRows = board.length;
    const colHeight = board[0].length;
    for (let c=0; c < colHeight; c++) {
        let rowArray = [];
        for (let r=0; r < numRows; r++) {
            rowArray.push(board[r][c])
        }
        if (checkArrWin(rowArray)) {
            return true;
        }
    }
    return false;
}

