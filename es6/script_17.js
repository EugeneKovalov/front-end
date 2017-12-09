// 1

let blackCat = {
    fur: "black",
    age: 11
}

{
    [blackCat['fur'], blackCat['age']] = [blackCat['age'], blackCat['fur']];
}

console.log(blackCat);

// 2

let mergeObjects = (obj1, obj2) => {
    let result = {};

    for (let prop in obj1) {
        result[prop] = obj1[prop];
    }

    for (let prop in obj2) {
        result[prop] = obj2[prop];
    }

    return result;
}

console.log(
    mergeObjects({
        weight: 75,
        petName: 'Goofie',
        hasJob: true,
        isMarried: false
    }, {
        weight: 90,
        isHomeless: false,
        petName: 'Stoney'
    })
);

// 3

function showBacket(price = 0, countItems = 0) {
    if (countItems === 0) {
        return 'В корзине нет товаров';
    }

    let word = countItems % 10 === 1 ? 'товар' : 'товара';

    return `В козрине ${countItems} ${word} на сумму ${price} грн.`;
}

console.log(showBacket(3, 0));
console.log(showBacket(10, 1));
console.log(showBacket(1, 201));
console.log(showBacket(31, 31));
console.log(showBacket(32, 32));
console.log(showBacket(3, 3));
console.log(showBacket(99, 99));

// акция =)
console.log(showBacket(0, 4));