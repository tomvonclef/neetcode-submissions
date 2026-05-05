class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.split('').filter(s => s.match(/[a-zA-z0-9]/)).join('').toLowerCase();
        console.log(s);
        for (let i = 0; i <= s.length-1; i++) {
            if (s[i] !== s[s.length-1-i])
                return false;
        }
        return true;
    }
}
