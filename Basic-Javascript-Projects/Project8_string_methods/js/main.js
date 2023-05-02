//Example of using ".concat" to connect string variables-------------------
function connecting_Exp() {
    var part1 = "We are like two ";
    var part2 = "pea's ";
    var part3 = "in a pod!";
    var full_Sentence = part1.concat(part2, part3);
    document.getElementById("con_Exp").innerHTML = full_Sentence;
}

//Example of "Slice" method-----------------------------------------------
function exp_Slice() {
    var sentence = "The question remains: Where is Waldo?";
    var section = sentence.slice(30,36);
    document.getElementById("slice_Method").innerHTML = section;
}

//Example of "toUpperCase()" method---------------------------------------
function upper_Exp() {
    var sentence1 = "omg wow!";
    var result = sentence1.toUpperCase();
    document.getElementById("uppercase_Exp").innerHTML = result;
}

//Example of "search()" method--------------------------------------------
function search_Method() {
    var text = "Here is an example of a search method!";
    var position = text.search("search");
    document.getElementById("Search").innerHTML = position;
}

//Example of "toString()" method------------------------------------------
function num_Exp() {
    var Z = 3000;
    document.getElementById("num2String").innerHTML = Z.toString();
}

//Example of "toPrecision()" method----------------------------------------
function precision_Exp() {
    var X = 1598.3549675112113;
    document.getElementById("precision_Method").innerHTML = X.toPrecision(7);
}

//Example of "toFixed()" method--------------------------------------------
function fixed_Method() {
    var num = 6.489156;
    var n = num.toFixed();
    document.getElementById("fixed_Exp").innerHTML = n;
}

//Example of "valueOf()" method--------------------------------------------
function value_Method() {
    var txt = "Example of a value method!";
    var result = txt.valueOf();
    document.getElementById("value_Exp").innerHTML = result;
}