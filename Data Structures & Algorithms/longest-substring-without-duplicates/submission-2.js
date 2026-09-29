class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left =0, set = new Set(), maxLength = 0;
        for(let right=0;right<s.length;right++){
            while(set.has(s[right])){
                set.delete(s[left++]);

            }
            set.add(s[right]);
            maxLength = Math.max(maxLength,set.size)
        }
        return maxLength
    }
}
