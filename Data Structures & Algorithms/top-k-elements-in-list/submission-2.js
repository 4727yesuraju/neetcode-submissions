class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       const count = {};

        for (let num of nums) {
            count[num] = (count[num] || 0) + 1;
        }
        const arr = Object.entries(count).map(([num,freq])=>[num,freq])?.sort((a,b)=>b[1]- a[1])
        return arr.slice(0,k).map(entries=>entries[0])
    }
}
