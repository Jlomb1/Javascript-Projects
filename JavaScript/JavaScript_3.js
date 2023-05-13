function displayType(character) {
    var characterType = character.getAttribute("data-character_type");
    alert(characterType + " is a well-known character in the " + character.innerHTML + " game series!");
}