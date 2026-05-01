class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        function hasDupe(s) {
            const chars = new Set();
            for (const char of s) {
                if (chars.has(char))
                    return true;
                chars.add(char)
            }
            return false;
        }
        if (s.length < 2)
            return s.length;
        let longest = 1;
        let start = 0;
        for(let end = 1; end < s.length; end++) {
            let ss = s.slice(start, end+1);
            while(hasDupe(ss)) {
                start++;
                ss = s.slice(start, end+1);
            }
            if (ss.length > longest)
                longest = ss.length;
        }
        return longest;
    }
}
