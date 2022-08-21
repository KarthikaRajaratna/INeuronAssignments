const FindLeapYear = (year) => {
    if (year % 100 != 0 && year % 4 == 0) {
        console.log("leap year");
    }
    else if(year%100 != 0){
        console.log("Not leap year");
    }
    else if(year %400 ==0){
        console.log("leap year");   
    }
}

FindLeapYear(2004);