// 1) Write a JavaScript program to get the volume of a Cylinder, Sphere and Cone with four decimal places using objects and classes.
// Create classes for volumes for each geometric shape which returns theoutput using the getVolume() method.

// eg- to get volume of cylinderlet
// obj= new Cylinder(radius,height);
// obj.getVolume();
// Formulas for volumes of the shapes-
// 1) Cylinder- Volume = πr2h
// where r is the radius and h is the height of the cylinder.
// 2)Sphere- Volume= 4/3π𝑟3
// where r is the radius
// 3) Cone- Volume= πr2h/3
// where r is the radius and h is the height of the cone.
 
class Cylinder{
    constructor(radius,height){
        this.radius= radius,
        this.height = height,
        this.getVolume =() =>{
            return (Math.PI*this.radius*this.radius*this.height).toFixed(4);
        }
    }
}

class Sphere{
    constructor(radius){
        this.radius= radius
        this.getVolume =() =>{
            return ((4/3)*(Math.PI*Math.pow(this.radius,3))).toFixed(4);
        };
    }
}

class Cone{
    constructor(radius,height){
        this.radius= radius,
        this.height = height,
        this.getVolume =() =>{
            return ((Math.PI*this.radius*this.radius)*(this.height/3)).toFixed(4);
        };
    }
}

//To get volume of cylinder
let cylinderObj = new Cylinder(2,5);
console.log(`The Volume of Cylinder for radius= ${cylinderObj.radius} and height=${cylinderObj.height} is ${cylinderObj.getVolume()}`);

//To get volume of Sphere
let sphereObj = new Sphere(2);
console.log(`The Volume of Sphere for radius= ${sphereObj.radius} is ${sphereObj.getVolume()}`);

//To get volume of Cone
let coneObj = new Cone(2,5);
console.log(`The Volume of Cylinder for radius= ${coneObj.radius} and height=${coneObj.height} is ${coneObj.getVolume()}`);
