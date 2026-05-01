class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const sortedNums = nums.toSorted();
        let lastVal = sortedNums[0];
        for (const n of sortedNums.slice(1)) {
            if (lastVal === n)
                return true;
            lastVal = n;
        }
        return false; 
    }
}
