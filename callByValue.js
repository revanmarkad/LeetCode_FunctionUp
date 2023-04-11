function profileLookup(name, property) {
    const personData = facebookProfiles.find((person) => person.firstName === name)  // data / undefined

    if(personData){  
        if(personData[property]){
            return personData[property]
        } else{
            return "no such property"
        }
    }else{
        return "No user found"
    }
}

// complete the above function such that when it is called with name and property, then it should return its value
// ex
// profileLookup("Pritesh", "number"), then it should return his number

// handle edge cases like:
//      if name is not in the list, return "person does not exist"
//      if property is not present then return "no such property"
// 
// Hint: dynamically access properties using square bracket


// console.log(profileLookup("Jay", "lastName"))


//3. write a function which returns full names of all people of gurgaon with their driving license status, in an array. 
// like shown in the example below
// ex = ['Jay - D/L', 'Pritesh Kumar - N D/L']


function getDLStatus() {
    //write your code here

    const gurgaonPeople = facebookProfiles.filter((person) => person.address.location === "gurgaon")
    const result = []

    gurgaonPeople.forEach((person) =>{
        const fullName = person.firstName + " " + (person.lastName ? person.lastName : "")
        result.push(fullName + (person.hasDrivingLicense ? "D/L" : " N D/L"))
    })

    return result
}

console.log(getDLStatus())


// . write a function which return the name of the any one person who like driving but doesnt have driving license
//asn => pritesh


// person likes should include driving
// hasDrivingLicense should be false


function getNameOfDriverWithoutDL() {
    // const personData = facebookProfiles.find((person) => profile.likes && profile.likes.includes('driving') && !profile.hasDrivingLicense))
    //profile.likes && profile.likes.includes('driving') && !profile.hasDrivingLicense
    
    for (let index = 0; index < facebookProfiles.length; index++) {
        const person = facebookProfiles[index]
        if(!person.hasDrivingLicense){
            if(person.likes && person.likes.includes("driving")){
                return person.firstName
            }
        }
    }
}


getNameOfDriverWithoutDL()
const cardData = [
    {
        suit: "heart",
        value: 7,
    },
    {
        suit: "club",
        value: 8,
    },
    {
        suit: "club",
        value: 2,
    },
    {
        suit: "diamond",
        value: 2,
    },
    {
        suit: "diamond",
        value: 5,
    },
    {
        suit: "club",
        value: 10,
    },
];

/*
    we will iterate through the whole array -- forEach
        {
        suit: "heart",
        value: 7,
    },

    we will compare value and suit

    if we get match then will return true 

    if not then will return false
    
    
*/


function findCard(value, suit) {
    
        // for (let index = 0; index < cardData.length; index++) {

        //     const card = cardData[index]
        //     if( suit === card.suit && value === card.value){
        //             return true
        //     }
        // }


    const data = cardData.find((card) =>  suit === card.suit && value === card.value)

    if(data){
        return true
    }else{
        return false
    }
    
}

//because it will firstly iterate all element if not found then at the end it will return it

/** * 1. complete the above function,
 * it should return true /false if card is present/absent
 * example
 * findCard(5, 'heart') should return false
 * findCard(10, 'club') should return true
*/

// console.log(findCard(5, 'heart') )
// console.log(findCard(10, 'club')) 



function getSuitCount() {

    const result = {}
    cardData.forEach((card) => {
        const suit = card.suit
        if(result[suit]){ 
            result[suit] = result[suit] + 1
        }else{
            result[suit] = 1
        }
        
    })

    return result
}


/*
    need to iterate through whole array -- forEach / forLoop
    we will create an empty object
    we will start adding count in this empty object
    we will check if the key already exist or not. If yes then increase the value by one or add a new key and put value as one
*/

/**
 * 3. write a function which returns an object with the suits as its key and its total count as its value
 * ans => {  heart:1,  club:3, diamond:2,}
*/


console.log(getSuitCount())
// Sachin Mahto 1:05 PM
// pass by value

let name = "sachin"

let name2 = name

name2 = "amit"


// console.log(name)
// console.log(name2)


//pass by reference 

let grades = ["A", "B", "C"]

let person1 = {
    name:'Sachin',
    mobile:"9102777777"
}

let grades2 = grades

let person2 = person1  // copying non-primitive data will copy refence

person2.name = "Vikrant"


// console.log(person1)
// console.log(person2)


function PassbyReference(obj) {
 let tmp = obj.a;
 obj.a = obj.b;
 obj.b = tmp;

 console.log(`Inside Pass By Reference
  Function -> a = ${obj.a} b = ${obj.b}`);
}

let obj = {
 a: 10,
 b: 20

}
console.log(`Before calling Pass By Reference
 Function -> a = ${obj.a} b = ${obj.b}`);

PassbyReference(obj)

console.log(`After calling Pass By Reference
 Function -> a = ${obj.a} b = ${obj.b}`);