

// IMPORTANT: solve all problems using using destructuring and rest syntax


// ============================================================================= //
//1.
// remove first element from places array and print the remaining array 
//result = ['gurgaon', 'jaipur', 'pune']

const places = ['delhi', 'gurgaon', 'jaipur', 'pune'];
const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar'];
const me = [...places];
me.shift();// shift work is shift remove first element of an array

console.log(me);

// The rest parameter syntax allows a function to accept and indefinite number of arguments as an array .
