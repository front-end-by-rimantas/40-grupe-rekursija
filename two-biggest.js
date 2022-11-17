const numbers = [0, 10, 2, 8, 4, 6];

let big1 = 0;
let big2 = 0;

for (const n of numbers) {
    if (n > big1) {
        big1 = n;
    } else if (n > big2) {
        big2 = n;
    }
}

console.log(big1, big2);