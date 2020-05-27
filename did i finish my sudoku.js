//Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'
//Sudoku rules:
//Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.

function doneOrNot(board) {
    for (var y = 0; y < 9; y++) {
        for (var x = 0; x < 9; x++) {
            var value = board[y][x];
            //Value can only be between 1 - 9
            if (value == 0) return "Try again!"
            
            if (value) {
                for (var x2 = 0; x2 < 9; x2++) {
                    if (x2 != x && board[y][x2] == value) {
                        return "Try again!";
                    } 
                }
                //Checks the line
                //x2 != x ensures that the value will not check itself and thus fails the check 
                for (var y2 = 0; y2 < 9; y2++) {
                    if (y2 != y && board[y2][x] == value) {
                        return "Try again!";
                    } 
                }
                // Check the column
                //y2 != y ensures that the value will not check itself and thus fails the check
                
                var startY = Math.floor(y/3)*3;
                for (var y2 = startY; y2 < startY + 3; y2++) {
                    var startX = Math.floor(x/3)*3;
                    for (x2 = startX; x2 < startX + 3; x2++) {
                        if ((x2 != x || y2 != y) && board[y2][x2] == value) {
                            return "Try again!";
                        }
                    }
                }
                // Check the square
                // With dividing x and y by 3 in Math.floor, it will always give the square of position 0 to 2, 3 to 5, 6 to 8 
            }
        }
    }

    return "Finished!";
}

let exampleBoard = 
      ([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
        [6, 7, 2, 1, 9, 0, 3, 4, 9],
        [1, 0, 0, 3, 4, 2, 5, 6, 0],
        [8, 5, 9, 7, 6, 1, 0, 2, 0],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 0, 1, 5, 3, 7, 2, 1, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 0, 0, 4, 8, 1, 1, 7, 9]])

doneOrNot(exampleBoard)
