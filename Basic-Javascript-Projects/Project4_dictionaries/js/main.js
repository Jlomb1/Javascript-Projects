//Dictionary------------------------------------------
function exp_Dictionary() {
    var Car = {
        //Reminder EXAMPLE: "type" is the Key, "Coupe" is the value.
        type: "Coupe",
        color: "Gun-Metal Gray",
        make: "Nissan",
        model: "Skyline",
        trim: "R32 GTR",
        year: "1989",
        engine: "RB26DETT"
    };
    delete Car.trim; //This will delete the key "trim" before the value "R32 GTR" can be displayed
    document.getElementById("Dictionary").innerHTML = Car.trim; //You can see "Car.trim" will return "R32 GTR"
}

