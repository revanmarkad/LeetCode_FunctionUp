// take out last three element from the morePlacesArray and take out first three elements from the places array 
// and print the combined array


const places = ['delhi', 'gurgaon', 'jaipur', 'pune'];
const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar'];

result =  ['hyderabad', 'Shimla', 'Srinagar', 'delhi', 'gurgaon', 'jaipur',]
 let arr=[];
 for(let i=1;i<morePlaces.length;i++){

   arr.push(morePlaces[i]);
 }

 for(let j=0;j<=2;j++){
   arr.push(places[j])
 }
 console.log(arr)