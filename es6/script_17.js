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
    return `В козрине ${countItems} товара на сумму ${price} грн.`;
}

console.log(showBacket(3, 0));
console.log(showBacket(10, 1));

// акция =)
console.log(showBacket(0, 4));