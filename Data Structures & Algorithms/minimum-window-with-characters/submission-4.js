class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t.length >s.length || !t.length ) return "";
        let tFreq = {}, window ={};
        for(let char of t){
            tFreq[char] = (tFreq[char] || 0 ) + 1
        }
        let left=0, matches=0,need = Object.keys(tFreq).length;
        let minLength = Infinity;
        let resPointer = [-1,-1]

        for(let right=0;right<s.length;right++){
            let char = s[right]
            window[char] = (window[char] || 0) + 1

            if(tFreq[char] && tFreq[char] === window[char]){
                matches++
            }
            while(matches === need){
                if(minLength > right-left+1){
                    minLength = right-left+1
                    resPointer= [left,right]
                }
                window[s[left]]--
                if(tFreq[s[left]] && window[s[left]] < tFreq[s[left]]){
                    matches--
                }
                left++;
            }
        }
        return minLength === Infinity ? "" : s.slice(resPointer[0], resPointer[1]+1)
    }
}
