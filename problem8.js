

// create two variables and store numbers in them.
// Now, write code, which return true if one of the variable is 50 or if their sum is 50.
// Otherwise, you need to return false.
// Also handle edge cases
// (in real world, these two numbers will be supplied by the users.
// Now think what if they supply something which is not a number ?)

 


 function ans(one,two){
     
        if(one==50||two==50||one+two==50){
            return true;
        }else{
            return false;
        }
    }
  
 console.log(ans(49,1));

 