// 4.
// destructure and store pincode into a variable named myPincode


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
  myData.address.pinCode='pincode';


  console.log(myData)
