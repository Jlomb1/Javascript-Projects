//ASSIGNED VARIABLES------------------------------------
var A = "Two Peas"
var B = " In a pod!"

//FUNCTIONS---------------------------------------------
function Exp1 () {
    document.write(A); //Here we have included the two assigned variables
    document.write(B);
    document.getElementById("Button_txt").innerHTML = document; //utilizing this method
}

//Assigning the ID to the Paragraph element and utilizing the "+= operator"
function Exp2 () {
    var sentence = "Here is an example of learning"
    sentence += " how to use the \"+=\" operator to concatenate a string!";
    document.getElementById("Paragraph_txt").innerHTML = sentence;
}

