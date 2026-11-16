class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let size = nums.length;
        let r=0,l=0;
        const queue = new Deque();
        const res = new Array(size-k+1)
        while(r<size){
            while(queue.size && nums[queue.back()] < nums[r]){
                queue.popBack()
            }
            queue.pushBack(r)
            if(l>queue.front())  queue.popFront()
            if(r+1 >= k){
                res[l++] = nums[queue.front()]
            }
            r++;
        }
        return res;
    }
}
