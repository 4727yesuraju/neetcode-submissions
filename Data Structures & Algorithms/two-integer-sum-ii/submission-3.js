class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const map = new Map();
        for(let i=0;i<numbers.length;i++){
            let temp = target - numbers[i];
            if(map.get(temp)){
                return [map.get(temp), i+1]
            }
            map.set(numbers[i],i+1)
        }
        return []
    }
}
