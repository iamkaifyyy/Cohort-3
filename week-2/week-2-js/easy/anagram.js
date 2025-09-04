/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // firstly using the .split() to split all letters in array

  // then using .sort() to sort them as an array

  // then at the end using .join() to join all the letters into one to make a single string

  const lowerCaseString1 = str1.toLowerCase();
  const arr1 = lowerCaseString1.split("");
  arr1.sort();
  const sortedString1 = arr1.join("");


  const lowerCaseString2 = str2.toLowerCase();
  const arr2 = lowerCaseString2.split("");
  arr2.sort();
  let sortedString2 = arr2.join("");


  if(sortedString1 == sortedString2){
    console.log("string are anagram");
    return true;
  } else {
    console.log("strings aren't anagram");
    return false;
  }
}

isAnagram("kaify", "ifyak");



 module.exports = isAnagram;
