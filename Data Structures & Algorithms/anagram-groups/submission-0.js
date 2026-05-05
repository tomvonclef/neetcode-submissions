class Solution {
    /**
     * @param {string} strs
     * @return {string}
     */
    getSig(str) {
        const hist = new Map();
        for (const c of Array.from(str)) {
            if (hist.has(c)) {
                hist.set(c, hist.get(c) + 1);
            } else {
                hist.set(c, 1);
            }
        }
        const e = [...hist.entries()];
        const sortedE = e.toSorted((a, b) => a[0].localeCompare(b[0]));
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
