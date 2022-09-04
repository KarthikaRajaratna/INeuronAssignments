// 1. Write a Javascript function to check whether a triangle is equilateral,isosceles or scalene

const triangleLength = (x,y,z) => {
    if(x==y==z)
        return "Equilateral";
    else if((x==y) || (x==z) || (y==z))
        return "Isosceles"
    else if((x!=y) && (y!=z) && (z!=x))
        return "Scalene"
}
const triangleType = triangleLength(1,1,1);
console.log(`The Triangle is ${triangleType}`);