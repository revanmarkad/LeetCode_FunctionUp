 /**
  * const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
  * return an array with all words converted into uppercase using higher order function
  * const countries = ['FINLAND', 'DENMARK', 'SWEDEN', 'NORWAY', 'ICELAND']
  * 
  * 
  * 
  */

 const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
 const capitals = countries.map(item => item.toUpperCase())

 console.log(capitals)