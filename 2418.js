// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.

var sortPeople = function (names, heights) {
  const newArr = names
    .map((name, index) => [name, heights[index]])
    .sort((a, b) => b[1] - a[1])
    .map((value) => value[0]);

  return newArr;
};

 const names = ["Mary", "John", "Emma"],heights = [180, 165, 170]
 console.log(sortPeople(names,heights))