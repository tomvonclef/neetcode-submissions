/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function other_subsets(nums) {
    if (nums.length === 0) {
        return [];
    }
    if (nums.length === 1) {
        return [nums];
    }
    const head = nums[0];
    const tail = nums.slice(1);
    const oses = other_subsets(tail);
    const subsets = [];
    subsets.push([head]);
    for (const s of oses) {
        subsets.push([head, ...s])
        subsets.push(s)
    }
    return subsets;
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const set = [];
        const oses = other_subsets(nums);
        return [...oses, []];
    }
}
