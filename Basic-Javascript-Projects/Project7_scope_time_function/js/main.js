//Example of a "global variable"-------------------------------------
var Z = 10
var Y = 20

function global_Exp() {
    document.getElementById("global_Num").innerHTML =
    (9 + Z) + "<br>" + "Definitely not 21.";
}

//Example of a "local variable"--------------------------------------
function local_Exp() {
    var X = 100
    document.getElementById("local_Num").innerHTML = 
    (X + 40 + 3) + "!";
}

//Example of utilizing "console.log" to debug an ERROR in the dev tools-------
function mess_Up() {
    console.log("messup_Exp").innerHTML = 
    (Z + 20);
}

//Example of an "IF" statement method utilizing the "date().gethours()"---
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = 
        "How are you This fine day?";
    }
}

function if_Exp() {
    if (Y > Z) {
        document.getElementById("Hello1").innerHTML = 
        "Hello!";
    }
}

//Example of including an "else" statement if the condition is flase-----
function age_Exp() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are NOT old enough to vote!";
    }
    document.getElementById("how_Old?").innerHTML = Vote;
}

//Example of "ELSE IF" statement with a time function-------------------
function time_Set() {
    var Time = new Date().getHours();
    var reply;
    if (Time < 12 == Time > 0) {
        reply = "It is the morning!";
    }
    else if (Time >= 12 == Time < 18) {
        reply = "It is the afternoon!";
    }
    else {
        reply = "It is the evening!";
    }
    document.getElementById("time_Exp").innerHTML = reply;
}