/*
  Reverse a string
  1. Split the string into an array
  2. Reverse the array
  3. Join the array back into a string
*/

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

console.log(`1) Reverse a String: hello = ${reverseString("hello")}`);

/* 
  Find the largest number in an array
  1. Sort the array
  2. Return the last element in the array
*/

const findLargestNumber = (arr) => {
  return arr.sort()[arr.length - 1];
};

console.log(
  `2) Find largest Number: [6, 3, 2, 7, 5, 3] = ${findLargestNumber([
    6, 3, 2, 7, 5, 3,
  ])}`
);

/*
  Is a string palindrome?
  1. Reverse the string
    a. Split the string into an array
    b. Reverse the array
    c. Join the array back into a string
  2. Compare the reversed string to the original string
*/

const isPalindrome = (str) => {
  return str.split('').reduce((match, char, idx) => {
    if (!match) return false;
    return char === str[str.length - idx - 1];
  }, true);
};

console.log(`3) Is Palindrome: racecar = ${isPalindrome("racecar")}`);
console.log(`3) Is Palindrome: abca = ${isPalindrome("abca")}`);

/*
  Function to check if two arrays are equal
  1. Check if the arrays are the same length
  2. Check if the arrays have the same elements in the same order
*/

const areArraysEqual = (arr1, arr2) => {
  if (arr1 === arr2) return true;
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

console.log(
  `4) Are Arrays Equal: [1, 2, 3] [1, 2, 3] = ${areArraysEqual(
    [1, 2, 3],
    [1, 2, 3]
  )}`
);

/*
  Remove duplicates from an array
  1. Create a new array
  2. Loop through the original array
  3. If the element is not in the new array, add it
*/

const removeDuplicates = (arr) => {
  // const newArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (!newArr.includes(arr[i])) {
  //     newArr.push(arr[i]);
  //   }
  // }
  // return newArr;

  return arr.reduce((newArr, char) => {
    if (!newArr.includes(char)) {
      newArr.push(char);
    }
    return newArr;
  }, []);
};

console.log(
  `5) Remove Duplicates: [1, 2, 3, 3, 4, 5, 5, 6, 7, 7] = ${removeDuplicates([
    1, 2, 3, 3, 4, 5, 5, 6, 7, 7,
  ])}`
);

/*
  Calculate the factorial of a number
  1. Create a variable to hold the result
  2. Loop through the numbers from 1 to the number
  3. Multiply the result by the current number
*/

const factorial = (num) => {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

console.log(`6) Factorial: 5 = ${factorial(5)}`);

/*
  Is a number prime?
  1. Loop through the numbers from 2 to the square root of the number
  2. If the number is divisible by the current number, return false
  3. Return true
*/

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

console.log(`7) Is Prime: 11 = ${isPrime(11)}`);

/*
  Is string A an anagram of string B?
  1. Sort the strings
  2. Compare the strings
*/

const isAnagram = (str1, str2) => {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
};

console.log(`8) Is Anagram: hello, olleh = ${isAnagram("hello", "olleh")}`);

/*
  Reverse the words in a string
  1. Split the string into an array of words
  2. Reverse the array
  3. Join the array back into a string
*/

const reverseWords = (str) => {
  return str.split(" ").reverse().join(" ");
};

console.log(`9) Reverse Words: Hello World = ${reverseWords("Hello World")}`);

/*
  Binary Search Algorithm
  1. Create a variable to hold the start index
  2. Create a variable to hold the end index
  3. Create a variable to hold the middle index
  4. Loop while the start index is less than or equal to the end index
  5. Set the middle index to the average of the start and end indices
  6. If the middle element is the target, return the middle index
  7. If the middle element is less than the target, set the start index to the middle index plus one
  8. If the middle element is greater than the target, set the end index to the middle index minus one
  9. If the target is not found, return -1
*/

const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let middle;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);

    if (arr[middle] === target) return middle;
    if (arr[middle] < target) start = middle + 1;
    if (arr[middle] > target) end = middle - 1;
  }
  return -1;
};

console.log(
  `10) Binary Search: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9 = ${binarySearch(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    9
  )}`
);
