class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
        
    isValidAnagram(str1,str2){
        if(str1?.length !== str2?.length) return false;
        
        const map = {};
        
        for(let char of str1){
            map[char] = (map[char] || 0) + 1
        }
        for(let char of str2){
            if(!map[char]) return false;
            map[char]--
        }
        
        return true
    }
    groupAnagrams(strs) {
           const obj  = {}
           const visited  = new Set()
            for(let i =0;i<strs?.length;i++){
                if(visited.has(strs[i])) continue
                 obj[strs[i]] = [strs[i]]
                for(let j=i+1;j<strs?.length;j++){
                if(obj[strs[i]] && this.isValidAnagram(strs[i],strs[j])){
                    obj[strs[i]].push(strs[j])
                    visited.add(...[strs[i],strs[j]])
                        visited.add(...[strs[j]])
                    console.log(strs[i],strs[j])
                }
                }
            }
            
            return Object.values(obj).map(val=>[...val])
    }
}
