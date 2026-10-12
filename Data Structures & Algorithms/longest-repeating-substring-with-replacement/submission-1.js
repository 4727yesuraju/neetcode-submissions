class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = new Map();
        let maxCount = 0;
        let ans = 0;
        let left =0;
        for(let right=0;right<s.length;right++){
            let windowSize = right-left+1;
            map.set(s[right], (map.get(s[right]) || 0)+1);
            maxCount = Math.max(maxCount, map.get(s[right]));
            if(windowSize - maxCount <= k){
                ans = Math.max(ans,windowSize);
            }else{
                map.set(s[left], (map.get(s[left])-1))
                left++;
            }
        }
        return ans
    }
}
