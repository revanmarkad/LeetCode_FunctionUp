 

/**
 * 3. write a function which returns an object with the suits as its key and its total count as its value
 * ans => {  heart:1,  club:3, diamond:2,}
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
function getSuitsNumber() {
    const suitObject = {};
    for (let index = 0; index < cardData.length; index++) {
    const card = cardData[index];
    const {suit} = card;
    if (suitObject[suit]) {
    suitObject[suit] = suitObject[suit] + 1;
    } else {
    suitObject[suit] = 1;
    }
    }
    return suitObject;
    }
    console.log(getSuitsNumber());


