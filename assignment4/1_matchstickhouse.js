// Create a function that takes a number (step) as an argument and returns the
// number of matchsticks in that step. See step 1, 2 and 3 in the image above.
// Take input from the user in the function parameter and return the output
// using the return statement.
// examplesmatchHouses(1) ➞ 6
// matchHouses(4) ➞ 21
// matchHouses(87) ➞ 436


const matchHouses = (houses) => {
 return (houses*5)+1;
}

const output = matchHouses(87);
console.log(`${output} match sticks needed to build the house`);