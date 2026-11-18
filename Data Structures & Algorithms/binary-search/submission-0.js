class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    binary_search(l,r,nums,target){
        if(l>r) return -1;
        let m= l+ Math.floor((r-l)/2);
        if(nums[m] === target) return m;
        return target < nums[m] ? this.binary_search(l,m-1,nums,target)               : this.binary_search(m+1,r,nums,target) 
    }
    search(nums, target) {
        return this.binary_search(0,nums.length-1,nums,target)
    }
}
