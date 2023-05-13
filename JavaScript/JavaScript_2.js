function validateForm() {
    let X = document.forms["myForm"]["fname"].value;
    if (X == "") {
        alert("First name must be filled out");
        return false;
    }
    let Y = document.forms["myForm"]["lname"].value;
    if (Y == "") {
        alert("Last name must be filled out");
        return false;
    }
}

