class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       const obj = {};

        for (let num of nums) {
            obj[num] = (obj[num] || 0) + 1;
        }

        const result = [];

        for (let i = 0; i < k; i++) {
            let maxKey = null;
            let maxFreq = -Infinity;

            for (let key in obj) {
                if (obj[key] > maxFreq) {
                    maxFreq = obj[key];
                    maxKey = key;
                }
            }

            result.push(Number(maxKey));
            delete obj[maxKey];
        }

        return result;
}
}
