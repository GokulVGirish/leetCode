// You are given a 0-indexed 2D integer array nums representing the coordinates of the cars parking on a number line. For any index i, nums[i] = [starti, endi] where starti is the starting point of the ith car and endi is the ending point of the ith car.

// Return the number of integer points on the line that are covered with any part of a car.
var numberOfPoints = function (nums) {
  const hash = {};
  for (let [a, b] of nums) {
    for (let i = a; i <= b; i++) {
      hash[i] = 1;
    }
  }
  return Object.keys(hash).length;
};
 const nums = [
   [3, 6],
   [1, 5],
   [4, 7],
 ];
 console.log(numberOfPoints(nums))