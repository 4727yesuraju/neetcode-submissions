class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(h) {
        const size = h.length
        const leftMax  =[h[0]], rightMax = [];
        rightMax[size-1] = h[size-1]
        for(let i=1;i<size;i++){
            leftMax[i] = Math.max(leftMax[i-1],h[i])
        }
        for(let i=size-2;i>-1;i--){
            rightMax[i] = Math.max(rightMax[i+1],h[i])
        }
        let res = 0;
        for(let i=0;i<size;i++){
            res += Math.min(leftMax[i],rightMax[i]) - h[i]
        }
        console.log(leftMax,rightMax,res);

        return res;
    }
}
