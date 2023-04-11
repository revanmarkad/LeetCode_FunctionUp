
//complete the above functin such that it returns the list of full names of all people of gurgaon.
// ex = ['Jay ', 'Pritesh Kumar']



const facebookProfiles = [
    {
    firstName: "Akash",
    lastName: "Agarwal",
    number: "111111111",
    likes: ["music", "movies"],
    hasDrivingLicense: false,
    address: {
    location: "rampur",
    state: "up",
    },
    emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
    },
    {
    firstName: "Pritesh",
    lastName: "Kumar",
    number: "222222222",
    likes: ["code", "driving"],
    hasDrivingLicense: false,
    address: {
    location: "gurgaon",
    state: "haryana",
    },
    emails: ["fgdfg@gmail.com"],
    },
    {
    firstName: "Sabiha",
    lastName: "Khan",
    number: "333333333",
    hasDrivingLicense: false,
    address: {
    location: "lucknow",
    state: "up",
    },
    },
    {
    firstName: "Suyash",
    lastName: "Kashyap",
    number: "444444444",
    likes: ["travel", "driving"],
    hasDrivingLicense: true,
    address: {
    
    location: "alwar",
    state: "rajasthan",
    },
    emails: ["abc@yahoo.com"],
    },
    {
    firstName: "Jay",
    likes: ["food", "mobile"],
    hasDrivingLicense: true,
    address: {
    location: "gurgaon",
    state: "haryana",
    },
    emails: ["abc@gmail.com", "efg@yahoo.com", "ghj@outlook.com"],
    },
    ];

 
function findName(stateName) {
    let name = "person not found"
    for (let index = 0; index < facebookProfiles.length; index++) {
    const person = facebookProfiles[index];
    const { address, firstName, lastName } = person;
    if (address.state === stateName) {
    name = firstName + " " + (lastName || "");
    break;
    }
    }
    return name
    }

    console.log(findName("haryana"))