// 3) Write a JavaScript program which accept a number as input in the
// function parameter and insert dashes (-) between each two even
// numbers.
// For example if you accept 025468 as the output should be 0-254-6-8.
// computeDash(025468) -> 0-254-6-8.

const computeDash = (num)=>{
    const arr=[];
    let data =num.toString().split('');
    for(let i=0;i<data.length;i++){
        if((data[i]%2 == 0)  && (data[(i+1)]%2 ==0)){
            arr.push(data[i]);
            arr.push("-");
        }
        else{
            arr.push(data[i]);
        }
    }
    return arr.join("");
}

let output = computeDash('025468');
console.log(output);