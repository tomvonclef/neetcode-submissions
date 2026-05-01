class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length < 2)
            return s.length;
        let longest = 1;
        let start = 0;
        const chars = new Set();
        chars.add(s[0]);
        for(let end = 1; end < s.length; end++) {
            while (chars.has(s[end])) {
                chars.delete(s[start]);
                start++;
            }
            chars.add(s[end]);
            if (end - start + 1 > longest)
                longest = end - start + 1;
        }
        return longest;
    }
}
