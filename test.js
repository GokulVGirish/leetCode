
function longestMonotonicSubarray(nums){
    let output=1

    let increment=1
    let decrement=1
    for(let i=1;i<nums.length;i++){
        if(nums[i-1]<nums[i]){
            increment++
            decrement=1
        }else if (nums[i - 1] > nums[i]) {
            decrement++
            increment=1
        }else{
            increment=1
            decrement=1
        }
        output=Math.max(output,increment,decrement)

    }
    return output
}


const nums = [1, 4, 3, 3, 2];
console.log(longestMonotonicSubarray(nums));
