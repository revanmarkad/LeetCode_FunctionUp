// write your own find and findIndex function
// (Hint: using for loop and if else)

const practiceData = [[14, 21, 23, 64], [33, 46, 51, 65]];

const incrementedArray = practiceData.map((outerArray) =>

outerArray.map(innerElement => innerElement + 1)
);
console.log(incrementedArray);
 
