// Check whether a given year is a leap year
 
// create a variable and store a random year in it 
// now write code, which should return  true or false, depending whether the value in the above variable is leap year or not

let year=2002;

if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    console.log(year + ' is a leap year');
} else {
    console.log(year + ' is not a leap year');
}
