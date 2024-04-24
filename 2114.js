// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// You are given an array of strings sentences, where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.


var mostWordsFound = function (sentences) {
 const hash={}
 let maxWords=0
 let maxSentense=0
   for(let i=0;i<sentences.length;i++){
    
    let word=1
    for(let j of sentences[i]){
        if(j==" "){
            word++
        }

    }
    hash[i]=word
    word=1
    if(hash[i]>maxWords){
        maxWords=hash[i]
        maxSentense=i
    }
   }
   return hash[maxSentense]

};
const arr = [
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
];
console.log(mostWordsFound(arr))