// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// var missingNumber = function (nums) {
//   let length = nums.length;
//   for (let i = 0; i <= length; i++) {
//     if (!nums.includes(i)) {
//       return i;
//     }
//   }
// };
var missingNumber = function (nums) {

  const newArr=new Array(nums.length+1).fill(-1)
  for(let i=0;i<nums.length;i++){
    newArr[nums[i]]=nums[i]
  }
  for(let i=0;i<newArr.length;i++){
    if(newArr[i]===-1){
      return i
    }
  }
  return 0

};
const nums = [3, 0, 1];
console.log(missingNumber(nums))