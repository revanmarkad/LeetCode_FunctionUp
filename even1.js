// 1. Print all even numbers in first 50 natural numbers
for(let i=1;i<=50;i++){
    if(i%2==0){
        // console.log(i)
    }
}
//2. print all odd numbers in natural numbers from 20 to 50
for(let j=20;j<=50;j++){
    if(j%2!=0){
        // console.log(j)
    }
}
// / 3. print all numbers that are divisible by 5 
//          [12, 45, 67, 89, 90, 34, 35, 55]
let arr=[12, 45, 67, 89, 90, 34, 35, 55];

for(let k=0;k<arr.length;k++){
    if(arr[k]%5==0){
        console.log(arr[k])
    }
}
// 4. Print all numbers of this array
// 		 [[1,2], [3,4], [5,6], [7,8]]
let arre=[[1,2], [3,4], [5,6], [7,8]];

for(let i=0;i<=arre.length;i++){
    console.log(arre[i])
}
// // 5.Print all prime numbers occurring in 1st 50 natural numbers
let count=0

for(let j=2;j<=50;j++)
{
for( let i=1;i<=j;i++)
{
  if(j%i==0)
  count++
  
}

if(count==2)

console.log(j)
count=0
}








   
