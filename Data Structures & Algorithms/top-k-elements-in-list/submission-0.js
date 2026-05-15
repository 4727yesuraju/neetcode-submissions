class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {}
        for(let num of nums){
            obj[num]= (obj[num] || 0)+1;
        }
        console.log(obj)
        const prior = [];
        for(let i=0;i<k;i++){
            let max = -Infinity, maxKey = ""
            Object.keys(obj).forEach(key=>{
            if(!obj[key]) return;
            if(obj[key] > max){
                max = obj[key];
                maxKey = key
            }
            })
            prior.push(maxKey)
            delete obj[maxKey]
        }
        return prior
    }
}
