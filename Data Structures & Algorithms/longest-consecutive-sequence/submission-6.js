class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums?.length === 0) return 0;
        nums.sort((a,b)=>a-b);

        let maxCount =0, curr = nums[0],count=0, i=0;

        while(i<nums?.length){
            if(nums[i]!== curr){
                curr = nums[i];
                count=0
            }
            while(i<nums?.length && nums[i] == curr) i++;
            count++;
            curr++;
            maxCount = Math.max(maxCount,count)
        }
        return maxCount
    }
}
