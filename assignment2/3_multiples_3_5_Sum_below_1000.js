// 3. Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000

const SumofMutiples3and5=()=>{
    let sum = 0;
    let num = 1;
    do{
    if(num % 3 == 0 || num % 5 == 0){
        sum = sum + num;
    }
    num++;
    }while(num < 1000);

    return sum;
}
const result = SumofMutiples3and5();
console.log(result);