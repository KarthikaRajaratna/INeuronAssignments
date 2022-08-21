const ConvertTemperatures = (temperature, Type) => {
    if(Type == 'F'){
        var C= ((temperature-32)/9)*5;
        console.log(`${temperature}°F is ${C}°C`)

    }
    else if(Type == 'C'){
        var F = ((temperature/5)*9)+32;
        console.log(`${temperature}°C is ${F}°F`)

    }
}

ConvertTemperatures(60,'C');