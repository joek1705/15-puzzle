/**
 * 
 * @param {number} size is a positive integer
 */
function GameBoard(size) {
    this.size = size;
    this.BoardArray = new Array(size);
    this.MovingSquare = [size - 1, size - 1] /* Holds row and column values of the square that moves */
    this.init = function() {
        let count = size;
        for(var i = 0; i < size; i++) {
            this.BoardArray[i] = new Array(size);
            let indx = 0;
            // The inner loop fills in the cells so that their values increase from left to right and top to bottom
            for(var j = (count - size) + 1; j <= count; j++){
                this.BoardArray[i][indx] = j;
                indx += 1;
            }
            count += size;
        }
    }
    this.swapMovingSquare = function() {
        let AdjacentSquares = [];
        let MovingSquareRow = this.MovingSquare[0];
        let MovingSquareCol = this.MovingSquare[1];
    }
    

    this.print = function() {
        this.BoardArray.forEach(element => {
            console.log(element);
        });
    }
} 