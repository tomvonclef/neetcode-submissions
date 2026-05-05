class Solution {
    /**
     * @param {string} strs
     * @return {string}
     */
    getSig(str) {
        const hist = Object.create(null); 
        for (const c of Array.from(str)) {
            if (c in hist) {
                hist[c] += 1;
            } else {
                hist[c] = 1;
            }
        }
        const sortedE = Object.entries(hist).toSorted((a, b) => a[0].localeCompare(b[0]));
        return JSON.stringify(Object.fromEntries(sortedE));
    }

    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map();
        for (const s of strs) {
            const sig = this.getSig(s);
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
