class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if(!height.length) return 0;
        let res = 0;
        const stack = [];

        for(let i=0;i<height.length;i++){
            while(stack.length && height[i]>=height[stack[stack.length-1]]){
                let mid = height[stack.pop()]

                if(stack.length ){
                    const right = height[i];
                    const left = height[stack[stack.length-1]];
                    const h = Math.min(right,left) - mid;
                    const w = i - stack[stack.length-1] -1;
                    res += h * w
                }
            }
            stack.push(i);
        }

        return res
    }
}
