console.clear();
const numbers = [
    10,
    2,
    [1, 2, [5, -2], 2],
    [1, 1, 2],
    6,
];

function sumCount(list) {
    let ats = 0;
    for (const item of list) {
        if (typeof item === 'number') {
            ats += item;
        } else {
            ats += sumCount(item);
        }
    }
    return ats;
}

const sum = sumCount(numbers);

console.log('Suma: ', sum);