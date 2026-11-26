class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};
        for(let num of nums){
            freq[num] = (freq[num] || 0) +1;
        }
        
        return Object.keys(freq)
            .sort((a, b) => freq[b] - freq[a])
            .slice(0, k)
            .map(Number);
}}
