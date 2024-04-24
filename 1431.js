// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.
// var kidsWithCandies = function (candies, extraCandies) {
//   let maxCandies = Math.max(...candies);
//   let result = [];
//   for (let i = 0; i < candies.length; i++) {
  
//     result.push(candies[i] + extraCandies >= maxCandies);
//   }
//   return result;
// };
var kidsWithCandies = function (candies, extraCandies) {
  let arr = [];
  for (let i = 0; i < candies.length; i++) {
    let flag = true;
    let totalCandies = candies[i] + extraCandies;
    for (j = 0; j < candies.length; j++) {
      if (i !== j && totalCandies < candies[j]) {
        flag = false;
        break;
      }
    }
    arr.push(flag);
  }
  return arr;
};
const candies = [2, 3, 5, 1, 3];
const extraCandies=3
console.log(kidsWithCandies(candies,extraCandies));