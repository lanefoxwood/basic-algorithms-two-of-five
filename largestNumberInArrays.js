function largestOfFour(arr) {
    let maxArr = [];
    maxArr.push(arr.map(subArr=>Math.max(...subArr)))
    return console.log(maxArr);
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

  /*
  function largestOfFour(arr) {
  return arr.map(function(group) {
    return group.reduce(function(prev, current) {
      return current > prev ? current : prev;
    });
  });
}
*/
/*Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

*/

// adding comments to demonstrate my logic process

// this program should accept an array and return an array containing the largest values of the provided sub-arrays.

//TODO: I need to use Math.max() to find the largest value of a lit of numbers.

//TODO: I need to define this function, which accepts an array as an argument

function largestOfFour(array){
  // TODO: inside this function I need to do the following:
  // TODO: 1. i need to select each index of the first array, or parent array, using a for...of loop.
      // TODO: inside of this for...of loop i need to do the following:
      //TODO: 1. i need to pass in the list of values from the child, using spread
      //TODO: 2. i need to call Math.max() on the entire child list, using spread
      //TODO: 3. i need a way to save the max value found...
          // in order to save the max values i think i can push them into their own array, called maxValuesArray.
      //TODO: 4. once i looked at the first child, got the Math.max() and push it into the new array called maxValuesArray, I can return that array and move to the next child array.
  // TODO: 2. I need to return an array containing only the Math.max() values as a result of the function running. 
};