//================================ attempted with recursion ============================//
function factorialize(num) {
    if(num === 0){
        return 1
    } 
    return num * factorialize(num-1);
  }
  factorialize(5);
// =============================== attempted with loop ====================================//

// function factorialize(num) {
//     if(num === 0){
//         let product = 1
//     }
//     for(let i = 2; i<num; i++)
//     product *= i
//     return product;
//   }
  
//   factorialize(5);








/* Factorialize a Number
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.
*/


// adding comments to demonstrate my logic process

//This function should accept a number as an input and return it's factorial as the result.

// i need to write the math formula for finding a factorial here:


//TODO:  define this function:

function findFactorial(number){
  //TODO inside this function I need to:
  //TODO: 1. accept any number as an input
  //TODO: 2. define a variable, maximum and set it's value to number (not necessary)
  //TODO: 2.5 define a variable, total and initialize it to 1. 
  //TODO: 3. use a for loop to calculate the total and keep track of the positive integers
      // inside the for loop I need TODO the following:
      //TODO. 1. update the value of total to be total = total * i.
          // for example: first iteration total = 1, i = 1; therefore total gets set to 1*2 and returns total. second iteration, total is 1 and i = 2, the loop returns total = 2*1. third iteration, total is 2 and i = 3, so loop returns total = 2*3....
      // TODO 3, increment the value of i by one unti i ===  maximum.
      //TODO for loop could be written as such: 
          /* for(let i = 1; i <= maximum; i++){
              let total = 1;
              total = total*i
          }
              */
          
  //TODO 4. return the value of total from the for loop we just finished. 
  let total = 1;
  for(let i = 1; i<=number; i++){
      total = total*i;
  }
  return total;
};
findFactorial(4);