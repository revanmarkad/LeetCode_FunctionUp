// 3.
// take out last three element from the morePlacesArray and take out first three elements from the places array 
// and print the combined array
//result =  ['hyderabad', 'Shimla', 'Srinagar', 'delhi', 'gurgaon', 'jaipur',];


const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']

newarr=[];
 for(let i=1;i<morePlaces.length;i++){
    newarr.push( morePlaces[i])
 }
 for(let j=0;j<=2;j++){
    newarr.push(places[j])
 }

console.log(newarr);