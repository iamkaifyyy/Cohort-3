/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(arr) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[i+1]){
            console.log(`there is big ${arr[i]}`);
        } else {
            console.log("there is no biggest element!")
        }
    }
}

let arr = [1, 2, 3, 4, 5];
console.log(arr);

findLargestElement();
module.exports = findLargestElement;