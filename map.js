

const result=[1,2,3,4,5,6,7]
.map(x=>x*2)
.filter(x=>x%2===0)
.map(x=>x+5)
.filter(x=>x<10)

console.log(result);