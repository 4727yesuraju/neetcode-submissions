class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const size = nums?.length;
        let res = Array.from(size).fill(1);
        let prefix = 1;
        for(let i=0;i<size;i++){
            res[i] = prefix;
            prefix *= nums[i]
        }

        let suffix = 1;
        for(let i = size-1;i>-1;i--){
            res[i] *= suffix;
            suffix *= nums[i];
        }
        return res
    }
}
