

var checkerboard = [[null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,"B",null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,"B",null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,"R",null,null,null,null,null],
                    [null,null,null,null,null,null,null,null]];

var row = 0;
var col = 0;

function setSquare(player, row, col) {
    checkerboard [row][col] = player;
    console.log("The player is " + player + " at " + row + "," + col + ".");
}


function getPieceAt(row, col) {
    var pieceAt;
    pieceAt = checkerboard[row][col];
    if (pieceAt !== null){
        console.log(pieceAt + " is at " + row + "," + col);
        return;
    } else;
    return console.log ("Null at " + row + "," + col);
}

function clearBoard(row, col) {
    for (row=0; row<checkerboard.length; row++){
        for (col=0; col<checkerboard.length; col+=1){
            checkerboard[row][col] = null;
        }
    }
}    

setSquare("X",1,4);
getPieceAt (5,3);
clearBoard(row,col);
console.log(checkerboard);
