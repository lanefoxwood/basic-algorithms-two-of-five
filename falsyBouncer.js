function bouncer(arr) {
    return arr.filter(Boolean);
  }
  
  bouncer([7, "ate", "", false, 9]);

/* Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

*/

// adding comments to demonstrate my logic process
// this function accepts an array and will remove any values that are "falsy" from it, then return the modifed array. 

//I could initalize an empty array at the beginning, or I could slice and splice to modify the original array. I think i want to just push the true values into a new array and return that....

//TODO: i need to define a function:

function bouncer(array){
  //TODO: inside of this function I need to do the following:
  //TODO: instantiate a new array, empty, for our true elements to be pushed into
  //TODO 1. i need to iterate over each element of the array and run a "falsy" test
      //TODO: inside of this loop, I need to apply a "falsy" test to each element of the array.
      //TODO: I need to type check...Boolean(element) by converting to boolean.
      // if think it would look something like this...

      // for(element of array){
      //      Boolean(element) ? newArray.push(element) : null
      //}
      // this should basically look through the array and if there are any true, they get added to the newArray. Otherwise, go to next and don't push anything into the new array. if no true values are found, then the array that is returned is empty, which is what we want. 

  //TODO 2. I need to return the newArray as a result of running this function
};