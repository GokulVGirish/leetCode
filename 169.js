//find majority element in an array
var majorityElement=function(nums){
    let currMaj=0
    let majNum=0
    const hash={}
    for(let i of nums){
        hash[i]=1+(hash[i]||0)
        if(hash[i]>majNum){
            currMaj=i
            majNum=hash[i]
        }


    }
    return currMaj
}
const nums = [3, 2, 3];
console.log(majorityElement(nums))