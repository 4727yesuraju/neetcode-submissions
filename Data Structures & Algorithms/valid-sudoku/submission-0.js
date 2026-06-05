class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let row=0;row<board.length;row++){
            const rowSet = new Set()
            const columnSet = new Set()
            for(let col = 0;col < board[row]?.length;col++){
                const rowDigit = board[row][col];
                const columnDigit = board[col][row];
                if(rowSet.has(rowDigit) || columnSet.has(columnDigit)) return false;
                if(rowDigit != ".") rowSet.add(rowDigit)
                if(columnDigit != ".") columnSet.add(columnDigit)
            }
        }
        
        for(let square = 0; square <9 ;square++){
            let boxSet = new Set();
            for(let i=0;i<3;i++){
                for(let j=0;j<3;j++){
                    let row = Math.floor(square / 3) * 3 + i;
                    let col = Math.floor(square % 3) * 3+ j;

                    const digit = board[row][col];
                    if(digit === '.') continue;
                    if(boxSet.has(digit)) return false
                    boxSet.add(digit)
                }
            }
        }

        
        return true
    }
}
