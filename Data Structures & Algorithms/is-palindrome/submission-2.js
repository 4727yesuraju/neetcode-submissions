class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumeric(char){
        return (char >= 'a' &&  char <= 'z') || (char >= 'A' && char <= 'Z') || (char >='0' && char <= '9')
    }
    isPalindrome(str) {
        let i=0,  j = str.length-1;
        while(i<j){
            if(!this.isAlphanumeric(str[i])){ i++; continue};
            if(!this.isAlphanumeric(str[j])) {j--; continue};
            if(str[i++]?.toLowerCase() != str[j--]?.toLowerCase()) return false;
        }
        return true
    }
}
