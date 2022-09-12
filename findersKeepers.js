function findElement(arr, func) {
    let num = 0;
    for(let num of arr){
        if(func(num)){
            return num;
        }
    }
    return undefined;
  }
  
  findElement([1, 1, 3, 5], num => num % 2 === 0);

/*Finders Keepers
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.*/
/*
0. look at each index of a given array, arr.
1. pass that index into a given function, func.
1.5 evaluate the expression/function and return a boolean.
2. if the function evaluates true, return index.
3. if false, continue;
*/

// adding comments to demostrate my logic process

// this function should accept an array and a function as arguments, and it should return the FIRST element of the array that passes the "truth test" as defined by the function passed in... for example, for a given array element, x, the expression function(x) should return true. 


// ok, a little bit more complex in here...dealing with functions being passed as arguments, but the bottom line is, I don't have to define what's being passed in! i love it. All i have to do is work on the relationship between the array elements and the function. 

//in essence, my task is simply taking the first element of the array and passing it into the function. then just loop it.... 
// in this case, I know the test cases are going to supply function(num), so the element of the array needs to be passed in as num...

//BONUS: could you make this function print out ALL elements that match a truth test? right now we are only grabbing the first one that matches and exiting... but what if there are multiple matches? see if you can modify this to return an array containing all matches. 
        // if that's the challenge, I immediately think the idea of a for...of loop will not work because the loop simply returns at the first match. 
        // you could modify the loop to run from 0 to array.length to make sure the test is ran over every element regardless.
        //you would also want to initialize an empty array, matchesArray, to hold all of the matches..... could you initialize it as undefined? i dont think so...
        // you would then change the if check by adding a step:
        // .push() the matching elements into the matchesArray before moving on to the next iteration.
        //lastly, just return matchesArray. 
        // in the case there are no matches, you return undefined. you should look for false first to prevent unexpected behavior. 


// define this function:

function findersKeepers(array, func){
    //TODO: inside of this function i need to do the following:
    //TODO: 1. loop over each element of the array
        //TODO: inside of this loop i need to do the following:
            //TODO: 1. call the function, passing in the current element
            //TODO: 2. return the boolean value
                // does element pass truth test? get the value of it and return it.
                    // but how? return the current element which is being evaluated, which is the argument of this function, called num. 
                // does it fail? AKA return boolean of false? go to the next element of the array and repeat the check.
                // if NO ELEMENT passes, return undefined. 
    //TODO: 2. return the first element, or undefined as a result of running this function 
};  

// i think i could use a for...of loop again, or the map() method... but for logical ease, i like for...of. 

/* 
    it should look something like this:

    for(element of array){
        func(element) ? element : undefined;
    }
*/