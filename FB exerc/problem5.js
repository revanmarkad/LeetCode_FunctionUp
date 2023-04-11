

//3. write a function which returns full names of all people of gurgaon with their driving license status, in an array. 
// like shown in the example below
// ex = ['Jay - D/L', 'Pritesh Kumar - N D/L']

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


    function printLikesUpdated() {
        let likesArr = [];
        for (let i = 0; i < facebookProfiles.length; i++) {
        // edge case: a person doesnt have any likes
        const likes = facebookProfiles[i].likes || [];
        // we can use push as well
        likesArr = [...likesArr, ...likes];
        }
        return likesArr;
        }

        console.log(printLikesUpdated())