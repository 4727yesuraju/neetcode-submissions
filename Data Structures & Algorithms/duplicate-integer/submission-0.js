class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // const obj = {};
        // for(let num of nums){
        //     if(num in obj) return true;
        //     obj[num] = true
        // }
        // return false
        // const set = new Set();
        // for(let num of nums){
        //     if(set.has(num)) return true;
        //     set.add(num)
        // }
        // return false
        return new Set(nums).size !== nums?.length
    }
}
