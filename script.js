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

function chunkArray(arr, len) {
  //SOLUTION 1//

  //Initialize chunked array//
  // const chunkedArr = [];

  // //Set Index//
  // let i = 0;

  // //Loop while index is less than the array length//
  // while (i < arr.length) {
  //   //Slice out from the index to the index + the chunk length and push on to the chunked array//
  //   //The push() method adds one or more elements to the end of an array and returns the new length of the array.
  //   //The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) 
  //   //where start and end represent the index of items in that array. The original array will not be modified. 
  //   chunkedArr.push(arr.slice(i, i + len));
  //   // Increment by chunk length
  //   i += len;
  // }

  // return chunkedArr;


  //SOLUTION 2//

  //Initialize chunked array//
  //   const chunkedArr = [];

  //   //Loop through array//
  //   arr.forEach(function(val) {
  //     //Get last element//
  //     const last = chunkedArr[chunkedArr.length - 1];

  //     //Check if last element is the last element if last elements length is equal to the chunk length
  //     if(!last || last.length === len) {
  //       chunkedArr.push([val]);
  //     } else {
  //       last.push(val)
  //     }
  //   });
  // return chunkedArr;

}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  //SOLUTION 1//

  //  The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
  //The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
  //Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array:
  // return arrays.reduce(function (a, b) {
  //   // The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array. 
  //   return a.concat(b);
  // });


  //SOLUTION 2//

  //The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
  // return [].concat.apply([], arrays);


  //SOLUTION 3//

//Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected. 
// function add(a, b, c) {
//   return a + b + c;
// }
// const arr = [1, 2, 3];

//SOLUTION 3b version//

// return [].concat(...arrays);
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
return formatStr(str1) === formatStr(str2);
 }


 //Helper function//
//Helper function helps take a part of the problem you are trying to solve gives you a portion of the solution to work with so you dont have to fit all the logic into one function makes it easier to manage.

function formatStr(str) {
  return str
  //The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. 
  .replace(/[^\w]/g, '')
  .toLowerCase()
  .split('')
  .sort()
  .join('')
}


// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  // gi in a regexp stand for global insensitive which means it will work on upper or lower case and applies to any string even outside of the function.
let newStr = str.toLowerCase().replace(/[a-z]/gi, function(char) {
if(char === 'z' || char === 'Z') {
  return 'a';
} else {
  //The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
  //The static String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units. 
  return String.fromCharCode(char.charCodeAt() + 1);
}
});

newStr = newStr.replace(/a|e|i|o|u/gi, function(vowel) {
  vowel.toUpperCase()
});

return newStr;

 }

// Call Function
const output = letterChanges('Hello there');

console.log(output);