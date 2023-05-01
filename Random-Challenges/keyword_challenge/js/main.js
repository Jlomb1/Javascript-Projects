function Vehicle(make, model, year, color) {
    this.Vehicle_make = make;
    this.Vehicle_model = model;
    this.Vehicle_year = year;
    this.Vehicle_color = color;
}

var Joe = new Vehicle("Toyota", "Supra", 1998, "white");
var Jon = new Vehicle("Jeep", "Trackhawk", 2019, "black");
var Jaclyn = new Vehicle("Lexus", "LS400", 1994, "black");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Joe drives a " + Joe.Vehicle_year + " " + Joe.Vehicle_make + " " + Joe.Vehicle_model +
    " that is left-hand drive and is " + Joe.Vehicle_color + "!";
}