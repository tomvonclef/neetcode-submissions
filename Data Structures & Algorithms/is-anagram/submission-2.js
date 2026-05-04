class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length)
            return false;
        const sortedS = [...s].sort();
        const sortedT = [...t].sort();
        for (let i = 0; i < sortedS.length; i++) {
            if (sortedS[i] !== sortedT[i])
                return false;
        }
        return true;
    }
}
