//Example of a switch statement utilizing fast-food list----------------
function food_Function() {
    var Food_Out;
    var fastFood = document.getElementById("food_Input").value;
    var food_String = " is a great choice for fast-food!";
    var inout_String = " is honestly TOP TIER over all the others!";
    switch(fastFood) {
        case "Taco Bell":
            Food_Out = "Taco Bell" + food_String;
        break;
        case "Mcdonalds":
            Food_Out = "mcdonalds" + food_String;
        break;
        case "Wendy\'s":
            Food_Out = "Wendy\'s" + food_String;
        break;
        case "Burger King":
            Food_Out = "Burger King" + food_String;
        break;
        case "Chick-Fil-A":
            Food_Out = "Chick-Fil-A" + food_String;
        break;
        case "Popeye\'s":
            Food_Out = "Popeye\'s" + food_String;
        break;
        case "Chipotle":
            Food_Out = "Chipotle" + food_String;
        break;
        case "Qdoba":
            Food_Out = "Qdoba" + food_String;
        break;
        case "KFC":
            Food_Out = "KFC" + food_String;
        break;
        case "IN-N-OUT":
            Food_Out = "IN-N-OUT" + inout_String;
        break;
        default:
            Food_Out = "Please enter a fast-food place exactly as written on the above list.";
    }
    document.getElementById("food_Output").innerHTML = Food_Out;
}

//Example of using the document.getElementByClassName() method-----------
function chnge_Exp() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "This text has changed!";
}

//Utilizing JavaScript to make a circle with the Canvas Element----------
var C = document.getElementById("canvas_Exp");
var circ = C.getContext("2d");
circ.beginPath();
circ.arc(250,120,90,0,2*Math.PI);
circ.stroke();
circ.arcWidth= 8;

var grd = circ.createLinearGradient(0,0,170,0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

circ.fillStyle = grd;
circ.fillRect(0, 0, 150, 280);
