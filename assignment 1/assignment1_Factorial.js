const factorial = (n) => {
    var count =1;
    do{
        count= count*n;
        n--;
    }while(n!=1)

    console.log(count);
}

factorial(5);


