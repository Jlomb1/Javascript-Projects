//ALERTS-----------------------------------------------------------------------------------------------------------------------------------------
window.alert(Math.random() * 100); //utilizing the "Math.random" in an alert window

//FUNCTIONS--------------------------------------------------------------------------------------------------------------------------------------
function plsWork() { //addition function
    var addition = 9 + 10;
    document.getElementById("Math").innerHTML = "9 + 10 = " + addition + ". Definitely not 21."
}

function subtraction_Function() { //subtraction function
    var subtraction = 50 - 21;
    document.getElementById("Math2").innerHTML = "50 - 21 = " + subtraction;
}

function multiplication() { //multiply function
    var simple_Math = 7 * 8;
    document.getElementById("Math3").innerHTML = "7 * 8 = " + simple_Math;
}

function division() { //division function 
    var simple_Math = 30 / 6;
    document.getElementById("Math4").innerHTML = "30 divided by 6 is " + simple_Math;
}

function more_Math() { //example of multiple problems in a function to return the answer
    var simple_Math = (1+2) * 10 / 2 - 5;
    document.getElementById("Math5").innerHTML = "1 plus 1, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() { //this function returns the remainder from a divison problem
    var simple_Math = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() { //this function returns the opposite form of an integer
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
}

function increment_Operator() { //adds "++" one to integer
    var y = 21;
    y++;
    document.write(y);
}

function decrement_Operator() { //subtracts "--" one from integer
    var z = 8.67;
    z--;
    document.write(z);
}

function math_Object() { //rounds DOWN to the nearest integer given
    document.getElementById("Math8").innerHTML = Math.floor(6.8) + " because it returns the value of x rounded down to its nearest integer."
}