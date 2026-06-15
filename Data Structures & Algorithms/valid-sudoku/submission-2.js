class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const size = board.length;
        const rows = new Array(9).fill(0)
        const cols = new Array(9).fill(0)
        const squares = new Array(9).fill(0)
        for(let r=0;r<size;r++){
          for(let c=0;c<size;c++){
                if(board[r][c] === '.') continue;
                let s = Math.floor(r/3) *3  + Math.floor(c/3) ;
                let val =  board[r][c] - '1';
                let bitMaskDigit = 1 << val
                if(rows[r] & bitMaskDigit ||
                   cols[c] & bitMaskDigit ||
                   squares[s] & bitMaskDigit
                ) return false
                rows[r] |= bitMaskDigit;
                cols[c] |= bitMaskDigit;
                squares[s] |= bitMaskDigit;
          }  
        }
        return true;
    }
}
