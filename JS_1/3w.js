var countEnergyCost = function (startHour, endHour) {
    if (startHour === endHour) {
        return "Введите интервал времени.";
    }
    var result = 0;
    var power = 2.5;
    var price = 1.68;

    for (var i = startHour; i < endHour; i++) {
        if (i >= 23 && i < 24|| i >= 0 && i < 7) {
            result += power * (price / 2);
        } else {
            result += power * price;
        }
    }

    return result;
};

console.log('В период с ' + 12 + ' до ' + 13 + ' часов ' +
    'потреблено энергии на  ' +
    countEnergyCost(12, 13) + ' грн. ');
console.log('В период с ' + 13 + ' до ' + 13 + ' часов ' +
    'потреблено энергии на  ' +
    countEnergyCost(13, 13) + ' грн. ');
console.log('В период с ' + 6 + ' до ' + 8 + ' часов ' +
    'потреблено энергии на  ' +
    countEnergyCost(6, 8) + ' грн. ');
console.log('В период с ' + 21 + ' до ' + 24 + ' часов ' +
    'потреблено энергии на  ' +
    countEnergyCost(21, 24) + ' грн. ');
console.log('В период с ' + 22 + ' до ' + 22 + ' часов ' +
    'потреблено энергии на  ' +
    countEnergyCost(22, 22) + ' грн. ');
console.log('В период с ' + 11 + ' до ' + 14 + ' часов ' +
    'потреблено энергии на  ' +
    countEnergyCost(11, 14) + ' грн. ');