"use strict";
function mergeAlternately(word1, word2) {
    const ans = [];
    const [m, n] = [word1.length, word2.length];
    for (let i = 0; i < m || i < n; ++i) {
        if (i < m) {
            ans.push(word1[i]);
        }
        if (i < n) {
            ans.push(word2[i]);
        }
    }
    return ans.join('');
}
var result = mergeAlternately("abc", "pqr");
console.log(result);
