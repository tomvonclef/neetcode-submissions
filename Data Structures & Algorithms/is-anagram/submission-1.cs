
public class Solution {
    private Dictionary<char, int> getHist(string s)
    {
        var hist = new Dictionary<char, int>();

        foreach (char c in s)
        {
            if (hist.TryGetValue(c, out int count))
            {
                hist[c] = count + 1;
            }
            else
            {
                hist[c] = 1;
            }
            hist[c] = hist.GetValueOrDefault(c) + 1;
        }
        return hist;
    }

    public bool IsAnagram(string s, string t)
    {
        if (s.Length != t.Length)
            return false;

        var sHist = getHist(s);
        var tHist = getHist(t);

        if (sHist.Count != tHist.Count)
            return false;

        foreach (var kvp in sHist)
        {
            if (!tHist.TryGetValue(kvp.Key, out int tVal) || kvp.Value != tVal)
            {
                return false;
            }
        }

        return true;
    }
}
