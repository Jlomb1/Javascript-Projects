//Example of a "WHILE" loop---------------------------------------------
function call_Loop() {
    var digit = "";
    var Z = 1;
    while (Z < 21) {
        digit += "<br>" + Z;
        Z++;
    }
    document.getElementById("Loop").innerHTML = digit;
}

//Example of a "string length property"--------------------------------
function length_Prop() {
    var text = "Howdy Partner!";
    var length = text.length;
    document.getElementById("string_Length").innerHTML = length;
}

//Example of a "FOR" loop----------------------------------------------
var Cars = ["RS4", "LS400", "Trackhawk", "GX460", "STI", "GTR"];
var content = "";
var X;

function for_Loop() {
    for (X = 0; X < Cars.length; X++) {
        content += Cars[X] + "<br>";
    }
    document.getElementById("listof_Cars").innerHTML = content;
}

//Example of an "array"-------------------------------------------------
function array_Function() {
    var Car_Picture = [];
    Car_Picture[0] = "track";
    Car_Picture[1] = "off-roading";
    Car_Picture[2] = "drag racing";
    Car_Picture[3] = "show";
    document.getElementById("Array").innerHTML = 
    "In this picture, this vehicle is meant for " + Car_Picture[1] + ".";
}

//Example of "const" keyword--------------------------------------------
function constant_Function() {
    const vehicle_Exp = {make:"Nissan", model: "Skyline", spec:"R32-GTR"};
    vehicle_Exp.spec = "R34-GTST"; //changed R32-GTR value for the spec property to R34-GTST
    vehicle_Exp.price = "$48,000"; //added a property with a value 
    document.getElementById("Constant").innerHTML = "The price of the " +
        vehicle_Exp.model + " " + vehicle_Exp.spec + " is on average " 
        + vehicle_Exp.price + ".";
}

//Example of "let" Keyword----------------------------------------------
var Y = 88;
document.write(Y);
{
    let Y = 150;
    document.write("<br>" + Y);
}
document.write("<br>" + Y);

//Example of a "return statement"---------------------------------------
var W = return_Stmnt(3, 10);
document.getElementById("Return").innerHTML = W;

function return_Stmnt(a, b) {
    return a + b;
}

//Example of object using properties and methods------------------------
function Obj_Example() {
    let car = {
        make: "Audi ",
        model: "RS4 ",
        year: "2008 ",
        color: "Silver ",
        description : function() {
            return "I would love to get my hands on a " + this.year + this.color +
            this.make + this.model;
        }
        
    };
    document.getElementById("Object_Exp").innerHTML = car.description();
}

//Example of break / continue statement in a FOR loop--------------------
let cont = "";
for (let H = 0; H < 8; H++) {
    if (H == 5) break;
    cont += H + "<br>";
}
document.getElementById("break_Cont").innerHTML = cont;

let cont2 = "";
for (let J = 0; J <8; J++) {
    if (J == 5) continue;
    cont2 += J + "<br>";
}
document.getElementById("break_Cont2").innerHTML = cont2;