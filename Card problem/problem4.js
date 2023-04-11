

/** 
 *  4. write a function which returns an object with the suits as its key and its available values as value
 *  ans => { heart:[7], club:[8,2,10], diamond:[2,5]} 
 *   
*/


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




function getSuits() {
    const suitObject = {};
    for (let index = 0; index < cardData.length; index++) {
    const card = cardData[index];
    const {suit, value} = card;
    
    if (suitObject[suit]) {
    const valueList = suitObject[suit];
    suitObject[suit] = [...valueList, value];
    } else {
    suitObject[suit] = [value];
    }
    }
    return suitObject;
    }
    console.log(getSuits());




