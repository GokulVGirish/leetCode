// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.
var arrayStringsAreEqual = function (word1, word2) {
  const newWord1 = word1.join("");
  const newWord2 = word2.join("");
  return newWord1 === newWord2;
};
const word1 = ["ab", "c"],
  word2 = ["a", "bc"];
  console.log(arrayStringsAreEqual(word1,word2))