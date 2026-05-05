class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map();
        for (const s of strs) {
            const sig = s.split('').sort().join('');
            console.log('sig for ' + s + ' is ' + sig);
            if (!groups.has(sig)) {
                groups.set(sig, [s]);
            } else {
                groups.set(sig, [s, ...groups.get(sig)]);
            }
        }
        return [...groups.values()];
    }
}
