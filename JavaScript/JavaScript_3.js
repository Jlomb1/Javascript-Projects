function displayType(character) {
    var characterType = character.getAttribute("data-character_type");
    alert(characterType + " is a well-known character in the " + character.innerHTML + " game series!");
}

function openForm() {
    document.getElementById("popForm").style.display = "block";
}

function closeForm() {
    document.getElementById("popForm").style.display = "none";
}