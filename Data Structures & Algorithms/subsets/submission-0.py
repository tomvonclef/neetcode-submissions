class Solution:
    def other_subsets(self, nums: List[int]) -> List[List[int]]:
        if (len(nums) == 0):
            return []
        if (len(nums) == 1):
            return [[nums[0]]]
        head = nums[0]
        tail = nums[1:]
        sets = []
        sets.append([head])
        oss = self.other_subsets(tail)
        for os in oss:
            sets.append([head] + os)
            sets.append(os)
        return sets

    def subsets(self, nums: List[int]) -> List[List[int]]:
        sets = []
        oses = self.other_subsets(nums)
        for os in oses:
            sets.append(os)
        sets.append([])
        return sets