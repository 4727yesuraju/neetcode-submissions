class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length;
        let cols = matrix[0].length;
        let left =0, right = rows*cols -1
        while(left <= right){
            let mid = left + Math.floor((right-left)/2);
            let row = Math.floor(mid/cols);
            let col = mid % cols
            if(matrix[row][col] === target) return true;
            else if (matrix[row][col] > target) right = mid-1;
            else left = mid+1
        }
        return false
    }
}
