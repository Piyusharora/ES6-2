
function circle(radius)
{
    this.radius = radius;
  // area method
    this.area = function() 
    {
        return Math.PI * this.radius * this.radius;
    };
}

var c = new circle(prompt("Enter Radius"));
console.log('------------');
console.log('Radius =',c.radius);
console.log('Area of Circle Is =', c.area().toFixed(2));

//module.exports.c=c;
module.exports=circle;

/*
function rec(length,width)
{
    this.length = length;
    this.width = width;
  // area method
    this.area = function() 
    {
        return this.length * this.width;
    };
}

var r = new rec(prompt("Enter Length"),prompt("Enter Width"));
console.log('------------');
console.log('Length =',r.length);
console.log('Width =',r.width);
console.log('Area Of Rectangle Is =', r.area().toFixed(2));
console.log('------------');

module.exports.rec = rec;


function cyl(rad,height)
{
    this.rad = rad;
    this.height = height;
  // area method
    this.area = function() 
    {
        return  2 * Math.PI * rad * (rad + height);
    };
}

var cy = new cyl(prompt("Enter Radius"),prompt("Enter Height"));
console.log('Radius =',cy.rad);
console.log('Height =',cy.height);
console.log('Surface Area Of Cylinder Is =', cy.area().toFixed(2));
console.log('------------');
module.exports.cyl = cyl;

/*
var length = 5;
var width = 10;
function rectanglearea (length, width) {
return length * width;
}

console.log("The area of your rectangle is" + rectanglearea());*/

