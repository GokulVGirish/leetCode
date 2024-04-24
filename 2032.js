// Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.
 var twoOutOfThree = function (nums1, nums2, nums3) {
    const res=[]
    let arr=new Set([...nums1,...nums2,...nums3])
    arr.forEach((value)=>{
        if(nums1.includes(value)&&nums2.includes(value)||nums2.includes(value)&&nums3.includes(value)||nums1.includes(value)&&nums3.includes(value)){
            res.push(value)
        }
    })
    return res


 };
 const nums1 = [3, 1],
   nums2 = [2, 3],
   nums3 = [1, 2];
   console.log(twoOutOfThree(nums1,nums2,nums3))