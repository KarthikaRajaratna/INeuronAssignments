// 4. Write a program to find the factorial of all prime numbers between a
// given range . Range will be passed as 2 values in the function
// parameters. eg- if it is needed to find the values for numbers 1-100, then
// function declaration can look like - function prime(1,100)


const primeFactorial = (start, end) => {
    let arr=[];
    //getting range of values
    for(let i=start;i<=end;i++){
        arr.push(i);
    }

    //get the prime numbers
    const pnumbers = arr.map( num => {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return null;
          }

          return num;
    }).filter(y => y != null);

    //factorial of prime numbers
    const factorial = pnumbers.map(n => {
        let cumulative = 1;
        do{
            cumulative = cumulative*n;
            n--;
        }while(n>0);
        return s;
    }).filter(x => x);
    return factorial;
   
}


const result = primeFactorial(1,10);
console.log(result);