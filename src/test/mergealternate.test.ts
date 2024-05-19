import { mergeAlternately } from "../app/mergealternate";

test("merge two strings",() => {
   var result = mergeAlternately("abc","def");
   expect(result).toEqual("adbecf")
})

test("merge two strings, word2 is larger", () => {
   const result = mergeAlternately("ab","pqrs")
   expect(result).toEqual("apbqrs")
})

test("merge two strings, word1 is larger", () => {
   const result = mergeAlternately("abcd","pq")
   expect(result).toEqual("apbqcd")
}  )