class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const freqMap = new Map();
        let left=0, maxFreq=0, ans =0;
        for(let right=0;right<s.length;right++){
           freqMap.set(s[right], (freqMap.get(s[right]) || 0) + 1);
           maxFreq = Math.max(maxFreq,freqMap.get(s[right]));
           let windowSize = right-left+1;
           if(windowSize - maxFreq > k){
            freqMap.set(s[left], freqMap.get(s[left++])-1)
           }
           windowSize = right-left+1;
           ans = Math.max(windowSize, ans)
        }
        return ans;
    }
}
