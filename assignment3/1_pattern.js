// 1. Using for loops, write a Javascript program to output the following
//         pattern -
//         1
//         2 3
//         4 5 6
//         7 8 9 10

const pattern = (startrange, endrange) => {
    let patterns = "";
    let count = 0;
    let s = [];
    //get the range values
    for (let n = startrange; n <= endrange; n++) {
        s.push(n);
    }
    for (let i = 1; i <= s.length / 2; i++) {
        for (let j = i; j > 0; j--) {
            patterns += s[count];
            count++;
            if (j != 1) {
                patterns += " ";
            }
        }
        if (s[count] == undefined) {
            break;
        }
        patterns += "\n";
    }
    return patterns;
}

const output = pattern(1, 21);
console.log(output);
