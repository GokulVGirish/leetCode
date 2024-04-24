// Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

// Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.
// var getCommon = function (nums1, nums2) {
//   // Sort both arrays for efficient comparison
//   nums1.sort((a, b) => a - b);
//   nums2.sort((a, b) => a - b);

//   let common = -1; // Initialize common variable to track the common value
//   let i = 0,
//     j = 0;

//   // Loop until one of the arrays ends
//   while (i < nums1.length && j < nums2.length) {
//     if (nums1[i] === nums2[j]) {
//       // If a common value is found
//       common = nums1[i]; // Update the common variable
//       break; // Break out of the loop since we found the minimum common value
//     } else if (nums1[i] < nums2[j]) {
//       // If current value in nums1 is smaller
//       i++; // Move to the next element in nums1
//     } else {
//       // If current value in nums2 is smaller
//       j++; // Move to the next element in nums2
//     }
//   }

//   return common; // Return the minimum common value
// };
var getCommon = function (nums1, nums2) {
  const set = new Set([...nums1, ...nums2]);
  let arr = [];
 set.forEach((value)=>{
    if(nums1.includes(value)&&nums2.includes(value)){
        arr.push(value)
    }
 })
  return Math.min(...arr)
};
const nums1 = [1, 2, 3],
  nums2 = [2, 4];
  console.log(getCommon(nums1,nums2))
