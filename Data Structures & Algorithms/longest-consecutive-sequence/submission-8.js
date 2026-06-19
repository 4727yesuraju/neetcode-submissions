class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const map = new Map();
        let res = 0;

        for(let num of nums){
            if(!map.has(num)){
                map.set(num, (map.get(num-1) || 0) + (map.get(num+1) || 0) + 1);

                map.set(num - (map.get(num - 1) || 0), map.get(num) )
                map.set(num + (map.get(num + 1) || 0), map.get(num) )

                res = Math.max(res,map.get(num))
            }
        }
        return res
    }
}
