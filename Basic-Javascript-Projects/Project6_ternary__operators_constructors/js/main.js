//Ternary Operators-----------------------------------------------------------------
function ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 120) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride!";
}

function vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are NOT" : "You ARE";
    document.getElementById("Vote").innerHTML = Can_vote + " old enough to vote!";
}

//"NEW and THIS" Keyword function------------------------------------------------------------
function Vehicle(year, make, model, color) {
    this.Vehicle_year = year;
    this.Vehicle_make = make;
    this.Vehicle_model = model;
    this.Vehicle_color = color;
}

var Joe = new Vehicle(1989, "Nissan", "R32 GTR", "Gunmetal Gray");
var Jack = new Vehicle(2018, "Dodge", "Durango SRT", "Metallic Gray");
var Jon = new Vehicle(1998, "Toyota", "Supra", "Baltic Blue");

function new_Keyword() {
    document.getElementById("New_and_This").innerHTML = 
    "Joe Drives a " + Joe.Vehicle_year + " " + Joe.Vehicle_make + " " +
    Joe.Vehicle_model + " in the color " + Joe.Vehicle_color + "!";
}

//Object constructor function----------------------------------------------------------------
function Student(first, last, age, height) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.height = height;
}

const newClass = new Student("Jon", "Jacobs", 26, "5\'11");

function exp_Assgnmnt() {
document.getElementById("exp_Assignment").innerHTML = 
"Our new student is " + newClass.firstName + " and he is " + newClass.age + ".";
}

//Example of a "Nested Function"-------------------------------------------------------------
function nsted_Exp() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 15;
        function Plus_one() {Starting_point += 5;}
        Plus_one();
        return Starting_point;
    }
}