class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        let frequencyCounter = {};

        for(let char of s){
            frequencyCounter[char] = (frequencyCounter[char] || 0) + 1; 
        }

        for(let char of t){
            if(!frequencyCounter[char]) return false;
            frequencyCounter[char]--
        }
        return true
    }
}
