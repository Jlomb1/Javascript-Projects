//Assigned variables-------------------------------------------------------
var x = 100;
var w = 85;
var y = 100;
var z = "One Hundred";
var q = "One Hundred";

//console logs in dev tools------------------------------------------------
console.log(2+ 2); //you can see this in the console in the dev tools
console.log(10>50); //using boolean to display "false" in the console

//TEST/EXAMPLE FUNCTIONS---------------------------------------------------

//"typeof" operator
function type_Exp() {
    document.write(typeof "Example Word!");
}

function type_Exp2() {
    document.write(typeof 3);
}

//example of an expression combining a string and a number
function type_Coercion() {
    document.write("100" + 5);
}

function type_Coercion2() {
    document.write("Ben" + 10);
}

//"not a number" operators
function exp_NaN() {
    document.getElementById("Test").innerHTML = 0/0;
}

function exp_NaN2() {
    document.getElementById("Test2").innerHTML = isNaN('This is a string');
}

function exp_NaN3() {
    document.getElementById("Test3").innerHTML = isNaN('10001110101');
}

//infinity and negative infinity examples
function inf_Exp() {
    document.write(2E310);
}

function neginf_Exp() {
    document.write(-3E310);
}

//example operators utilizing <, >, ==, ===, &&, ||, and !
function bl_Exp() {
    document.write(15>5);
}

function bl_Exp2() {
    document.write(20<10);
}

function eq_Exp() {
    document.write(25 == 20);
}

function eq_Exp2() {
    document.write((10+15) == 25);
}

function trple_Exp() {
    document.write(x === y);
}

function trple_Exp2() {
    document.write(x === z);
}

function trple_Exp3() {
    document.write(y === z);
}

function trple_Exp4() {
    document.write(x === w);
}

function logic_Op() {
    document.write(10>2 && 10>4);
}

function logic_Op2() {
    document.write(2>10 && 10>4);
}

function logic_Or() {
    document.write(2>10 || 10>4);
}

function logic_Or2() {
    document.write(2>10 || 4>10);
}

function logic_Not() {
    document.getElementById("Not").innerHTML = !(20>10);
}

function logic_Not2() {
    document.getElementById("Not2").innerHTML = !(5>10);
}