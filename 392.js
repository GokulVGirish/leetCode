//Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
// var isSubsequence = function (s, t) {
//   let subsequence = true;
//   for (let i = 0; i < s.length; i++) {
//     if (!t.includes(s[i])) {
//       subsequence = false;
//     }
//   }
//   return subsequence;
// };
var isSubsequence = function (s, t) {
  let firstArr = 0;
  let secondArr = 0;
  while (firstArr < s.length && secondArr < t.length) {
    if (s[firstArr] == t[secondArr]) {
      firstArr++;
    }
    secondArr++;
  }
  return s.length === firstArr;
};
const s = "abc",
  t = "ahbgdc";
  console.log(isSubsequence(s,t))