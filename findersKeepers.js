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