const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

function writeCards(namesArray, eventName) {
    let newArray = []
    for (let i = 0; i < namesArray.length; i++) {
        newArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return newArray;
}

wrapGifts(gifts);

const cards = writeCards(["Charlie", "Samip", "Ali"], "birthday")

function countDown(posInteger) {
    for (let count = posInteger; count >= 0; count--) {
        console.log(count);
    }
}