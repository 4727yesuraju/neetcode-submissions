class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=>a-b);

        const counter = new Map();
        for(let num of nums){
           counter.set(num, (counter.get(num) || 0) + 1)
        }
        const res = [];
        for(let i=0;i<nums.length;i++){
            counter.set(nums[i], (counter.get(nums[i]) || 0) -1)

            if(i>0 && nums[i] === nums[i-1]) continue;

            for(let j=i+1;j<nums.length;j++){
                counter.set(nums[j], (counter.get(nums[j]) || 0) -1);
                if(j>i+1 && nums[j] === nums[j-1]) continue
                const target = -(nums[i] + nums[j]);
                if(counter.get(target) > 0){
                    res.push([nums[i],nums[j], target])
                }
            }

            for(let j=i+1;j<nums.length;j++){
                counter.set(nums[j], (counter.get(nums[j]) || 0) + 1)
            }
        }
        return res
    }
}
