function hasTargetSum(array, target) {
  // Write your algorithm here
    const seenNumbers = {};
    for (const number of array) {const complement = target - number;
      if (seenNumbers[complement]) return true;
      seenNumbers[number] = true;
    }
    return false;
  }
/* 
  Write the Big O time complexity of your function here
  The loop iterates over each element in the array exactly once. 
  Let's denote the length of the array as n. So, the time complexity for this part is O(n).
*/

/* 
  Add your pseudocode here
  Initialize an empty object to store seen numbers
  Iterate through each number in the array
  Calculate the complement for the current number
  Check if the complement exists in the seenNumbers object
  If complement exists, return true
  Update the seenNumbers object with the current number
  If no pair summing up to target is found, return false
*/

/*
  Add written explanation of your solution here
The function hasTargetSum(array, target) takes two parameters: an array of numbers (array) and a target sum (target)
It initializes an empty object called seenNumbers 
It iterates through each number in the array using a for...of loop.
For each number, it calculates the complement, which is the difference between the target sum and the current number. 
This complement represents the number needed to reach the target sum when added to the current number.
It checks if the complement exists as a key in the seenNumbers object. 
If it does, it means that there exists another number in the array such that their sum equals the target. 
In this case, it returns true, indicating that there is a pair of numbers in the array that sum up to the target.
If the complement doesn't exist in the seenNumbers object, it means that the current number has not been encountered before.
In this case, it adds the current number to the seenNumbers object and sets its value to true, indicating that it has been seen.
After iterating through all the numbers in the array, if no pair of numbers is found that sums up to the target, the function returns false, indicating that there is no such pair in the array.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", hasTargetSum([1, 2, 5], 4));
  
    console.log("");
  
    console.log("");
    // Negative numbers?
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));
  
    console.log("");
    // Multiple pairs?
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([1, 2, 3, 4], 5));
  
    console.log("");
    // Single numbers?
    console.log("Expecting: false");
    console.log("=>", hasTargetSum([4], 4));
  }

module.exports = hasTargetSum;
