 

 const array1=[1,12,undefined,3,undefined,65];

 const resultArray=[];

 function ans(element){

    if(typeof element !== "undefined"){
        resultArray.push(2*element);
    }
 }

 array1.forEach(ans);
 console.log(resultArray);