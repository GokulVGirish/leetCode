// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
var merge = function (intervals) {
     if (!intervals || intervals.length === 0) {
       return [];
     }
     let merged=[]
     intervals.sort((a,b)=>a[0]-b[0])
     let prev=intervals[0]
     for(let i=1;i<intervals.length;i++){
        let interval=intervals[i]
        if(prev[1]>=interval[0]){
            prev[1]=Math.max(prev[1],interval[1])
        }else{
            merged.push(prev)
            prev=interval
        }

     }
     merged.push(prev)
     return merged


};




const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(merge(intervals))
 

