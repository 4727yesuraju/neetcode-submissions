class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */

    isPermutation(map1,string){
        const map = new Map(map1)
        for(let char of string){
        map.set(char, (map.get(char) || 0) -1);
        if(!map.get(char)) map.delete(char);
        }
        return !map.size
    }
    checkInclusion(s1, s2) {
        let left =0;
    
        let string1freqCount = new Map();
        for(let i=0;i<s1.length;i++){
            string1freqCount.set(s1[i], (string1freqCount.get(s1[i]) || 0) +1)
        }

        for(let right=s1.length-1;right<s2.length;right++){
         if(this.isPermutation(string1freqCount, s2.slice(left,right+1))) return true;
         else left++
        }
        return false
    }
}
