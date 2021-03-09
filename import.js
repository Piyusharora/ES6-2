
//const c = requires("circle");

var circle = require("./caltest.js");

//import circle from './caltest.js';

//circle.circle(prompt("Enter Radius"));
var d= new circle(prompt("Enter Radius"));
console.log('------------');
console.log('Radius =',d.radius);
console.log('Area of Circle Is =', d.area().toFixed(2));