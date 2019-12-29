const c4Board = document.getElementById("connectBoard");

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
    column.id = "col" + col;
    column.classList.add("column");
    // column.addEventListener("click", moveChip);
    for (let row = 0; row < board[col].length; row++) {
        let cell = document.createElement("div");
        cell.classList.add("empty","cell");
        column.appendChild(cell);
    }
    c4Board.appendChild(column);
}



