const myData = {
    name: "Rahul",
    age: 20,
    gender: "male",
    address: {
      pinCode: 123455,
      city:"delhi"
    },
    likes:["music", "movies"]
  }
  delete myData.address.pinCode;
  myData.address.pinCode=435798

// 4.
// destructure and store pincode into a variable named myPincode
  
console.log(myData)
  