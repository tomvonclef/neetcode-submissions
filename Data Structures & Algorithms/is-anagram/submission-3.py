class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        sortedS = sorted(s)
        sortedT = sorted(t)
        for index, c in enumerate(sortedS):
            if (sortedT[index] != c):
                return False
        return True