class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(c){
      if( (c >= 'a' && c <= 'z') ||
          (c >= 'A' && c <= 'Z') || 
          (c >= '0' && c <= '9')
       ) return true
    }
    isPalindrome(s) {
        let newStr = "";
        for(let c of s){
            if(this.isAlphaNumeric(c)){
                newStr += c.toLowerCase()
            }
        }
        console.log("-->newStr",newStr)
        return newStr === newStr.split("").reverse().join("")
    }
}
