
// // js has a 4 types of scope

// // block scope
// // function scope
// // global scope
// // local scope 











// // Block scope

// {
//     let x=2;
//     console.log(x);
// }






// // function scope

// // Each function creat new scope






 
// // global scope

// // Any varibal diclar outside of a function is said to havae global scope


// let scope="Global";

// console.log(scope);

// function acc(){
//     console.log(scope);
// }
// acc();



// //local scope


// // local varibales have function scope ;they can only be accessed from withen the function ;

// function demo(){

//     let xy='name';
//     console.log(xy)
// }
//  demo();




//  let mynm="revannth";
//   let count=0;
//  for(let i=0;i<mynm.length;i++){

//     if(mynm[i]=='a'||mynm[i]=='e'||mynm[i]=='i'||mynm[i]=='o'||mynm[i]=='u'){
//         count++;
//     }
//  }
//  console.log(count);


// let nm='Ntin';

// let ne=''
// for(let i=nm.length-1;i>=0;i--){
//     ne+=nm[i]
// }
// if(nm==ne){
//     console.log(nm,"is a palindrome")
// }else{
//     console.log(nm,"is not a palindrome")

// }
function ensureQuestion(s) {
  
  
  for(let i=0;i<s.length;i++){
     if(s.charAt(s.length - 1)=="?"){
      return s;
     }else{
      return  s+"?"
     }
  }
}

console.log(ensureQuestion('jhgfrt?'))