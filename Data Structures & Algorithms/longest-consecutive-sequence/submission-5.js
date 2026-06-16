class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
       const set = new Set(nums);
       let maxCount = 0;
       for(let i=0;i<nums.length;i++){
         let count = 0;
         let digit = nums[i];
         while(set.has(digit)){
            count++;
            digit++
         }
         maxCount = count > maxCount ? count:maxCount;
       }
       return maxCount
    }
}
