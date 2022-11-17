// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ....

// b, a, ats
function fib(n) {
    if (n < 3) return n;
    let a = 2;
    let b = 1;
    let ats = 0;

    for (let i = 0; i < n - 2; i++) {
        ats = a + b;
        b = a;
        a = ats;
    }

    return ats;
}

for (let i = 0; i < 20; i++) {
    console.log(fib(i));
}