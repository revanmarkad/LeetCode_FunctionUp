// insert that element at the start of the morePlaces array and print the new array

const places = ['delhi', 'gurgaon', 'jaipur', 'pune'];
const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar'];

result =  ['delhi', 'kochi', 'hyderabad', 'Shimla', 'Srinagar']

   let ans=[...morePlaces];

   ans.unshift(places[0])

   console.log(ans);
 
 