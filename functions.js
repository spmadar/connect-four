const c4Board = document.getElementById("connectBoard");
var isRedsTurn = true;
var gameOver = false;

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

// initialize board into DOM
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
// install reset button click handler here
document.getElementById("newGameButton").addEventListener("click", resetButton);

// ***Page Init Is Done At This Point***
function resetButton() {
    location.reload();
}

function moveChip(event) {
    if (gameOver) {
        return;
    }
    let cell = event.target;
    let parent = cell.parentElement;
    let col = Number(parent.id)

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
    checkWin();
}


function checkWin() {
    let winString = "Yellow"
    if (isRedsTurn) {
        winString = "Red"
    }
    if (checkRowWin() || checkColWin() || checkDiagUpRight() || checkDiagDownRight()) {
        document.getElementById('winnerColor').innerHTML = winString;
        document.getElementById('winnerColor').style.color = winString;
        document.getElementById('winnerWins').innerHTML = " wins!";
        gameOver = true;
    }
    else if (checkTie()) {
        document.getElementById('winMessage').innerHTML ="It's a tie!";
        gameOver = true;
    }
    // turn flipper
    isRedsTurn = !isRedsTurn;
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

function checkColWin() {
    for (let c=0; c < board.length; c++) {
        if (checkArrWin(board[c])) {
            return true;
        }
    }
    return false;
}

function checkTie() {
    for (let r=0; r < board.length; r++) {
        for (let c=0; c < board[0].length; c++) {
            if (board[r][c] == "E") {
                return false;
            }
        }
    }
    return true;
}

function checkDiagUpRight() {
    for (let r=0; r <= board.length - 4; r++) {
        for (let c=0; c < board[0].length - 4; c++) {
            console.log(r + "," + c)
            if (board[r][c] !== "E" &&
            board[r][c] == board[r+1][c+1] && 
            board[r+1][c+1] == board[r+2][c+2] &&
            board[r+2][c+2] == board[r+3][c+3]
            ) {
                return true;
            }
         }
    }
    return false;
}

function checkDiagDownRight() {
    for (let r = 0; r <= board.length - 4; r++) {
        for (let c = 3; c <= board[0].length; c++) {
            if (board[r][c] !== "E" &&
            board[r][c] == board[r+1][c-1] && 
            board[r+1][c-1] == board[r+2][c-2] &&
            board[r+2][c-2] == board[r+3][c-3]
            ) {
                return true;
            }
         }
    }
    return false;
}