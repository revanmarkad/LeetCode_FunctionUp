// 5.
// destructure and store second like into a vaiable named myLike

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
  delete myData.likes
  myData.likes=['movies'];
  console.log(myData)

