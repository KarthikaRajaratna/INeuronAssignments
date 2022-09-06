// 3. Write a program to find whether a given number is special number or not-
// If the sum of the factorial of digits of a number (N) is equal to the
// number itself, the number (N) is called a special number.
// eg- 145 is a special number
// Logic- 1! + 4! + 5!= 1+24+120 i.e 14

const checkSpecialNumber = (num) => {
    let s = num.toString().split('').map(x => {
        let n = 1;
        do {
            n = n * x;
            x--;
        } while (x > 1);
        return n;
    }).reduce((start, sum) => start + sum, 0);
    if (s == num) {
        return `${num} is Special number`;
    }
    else {
        return `${num} is not Special number`;
    }
}

const output = checkSpecialNumber(145);
console.log(output);
