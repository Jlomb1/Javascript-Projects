//Assigning STRINGS to VARIABLES -------------------------------------------------------------------
var A = "Hello! Here is an example of an \"alert box\".";
var B = "Here is an example of assigning string to a variable,";
var C = " Pretty neat!";
var D = " A wise man once said, \"If not us, then who; if not now, then when?\""
var Sent1 = "This is the beginning of the string,"
var Sent2 = " and this is the end of the string."

//Utilizing a function ------------------------------------------------------------------------------
function My_First_Function () { //Here we are defining a function and naming it
    var str = "This is the button text!"; //Here we are defining a variable and giving it a string value
    document.getElementById("Button_Text").innerHTML = str; //We are putting the value of the variable INTO the HTML elementFromPoint with the "Button_Text" id
}

function bigImg(x) {
    x.style.height= "64px";
    x.style.width= "64px";
}

function regImg(x) {
    x.style.height= "32px";
    x.style.width= "32px"; 
}

//Code that calls the assigned variables/string -----------
window.alert(A);
document.write(B);
document.write(C);
document.write(D);
//An example of concatenating two variabes "Sent1" and "Sent2"
document.write(Sent1+Sent2);
//An example of an expression 9+10 which will display as 19------------------------------------------
document.write(9+10);