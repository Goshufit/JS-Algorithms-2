// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  //The match() method retrieves the result of matching a string against a regular expression.
  //Create filtered array thatt takes in no special characters like commas for example// 
  // SOLUTION 1 - Return a single longest word//
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

  //The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending,
  //built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
  //switching a and b parameters in the code block will reverse the order from biggest to smallest and vice versa.
  //Sort by length the words or numbers by length return pairs of the same length//
  // SOLUTION 2 - Return an array and include multiple words if they have the same length//
  const sorted = wordArr.sort((a, b) => b.length - a.length
  );

  //The filter() method creates a new array with all elements that pass the test implemented by the provided function.
  //If multiple words put into an array//
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string//
  const longestWordArr = sorted.filter((word) => word.length === sorted[0].length);

  //Check if more than one array valid
  if (longestWordArr.length === 1) {
    //return a string/word//
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) { }

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) { }

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) { }

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) { }

// Call Function
const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 2);

console.log(output);