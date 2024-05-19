export function mergeAlternately(word1: string , word2: string){
    const ans: string[] = [];
    const [m,n] = [word1.length,word2.length];
    for (let index = 0; index < m || index <n; index++) {
        if (index < m ) {
            ans.push(word1[index])
        }
        if (index < n ) {
            ans.push(word2[index])
        }     
    }
    return ans.join('');
}