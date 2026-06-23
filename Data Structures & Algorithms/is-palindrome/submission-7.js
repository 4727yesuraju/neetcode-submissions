class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNum(c){
      if( (c >= 'a' && c <= 'z') ||
          (c >= 'A' && c <= 'Z') || 
          (c >= '0' && c <= '9')
       ) return true
    }
    isPalindrome(s) {
        let l=0,r = s.length-1;
        while(l<r){
            while(l<r && !this.isAlphaNum(s[l])) l++;
            while(r>l && !this.isAlphaNum(s[r])) r--;
console.log("-->test",s[l],s[r])
            if(s[l]?.toLowerCase() !== s[r]?.toLowerCase()) return false
            l++;
            r--
        }
        return true
    }
}
