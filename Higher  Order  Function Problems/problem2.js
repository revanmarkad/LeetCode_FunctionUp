

/**
 * requirement one
 * increment each number by one and output the resultant array using a higher order method and for loop
 * HINT: use nesting */
const practiceData = [[14, 21, 23, 64], [33, 46, 51, 65]];
const evenArray = practiceData.map((outerArray) =>
outerArray.filter(innerElement => innerElement % 2 === 0)
);
console.log(evenArray);





/**
requirement two
* from the above array, create an array of array of even numbers using a higher order method and for loop
* solution = [[14,64], [46]]
*/

// const practiceData = [[14,21,23,64], [33,46,51,65]];

// const res=practiceData.map(practiceData.filter(x=>x%2==0))
// console.log(res)
