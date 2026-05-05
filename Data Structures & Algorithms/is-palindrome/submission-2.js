class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.split('').filter(s => s.match(/[a-zA-z0-9]/)).join('').toLowerCase();
        return s === s.split('').reverse().join('');
    }
}
