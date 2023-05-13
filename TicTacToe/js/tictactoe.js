let activePlayer = "X"; //This variable keeps track of whos turn it is.
let selectedSquares = []; //This array stores an array of MOVES, we use this to determine win conditions.

function placeXorO(squareNumber) { //This function is for placing an x or o in a square.
    //This condition ensures a square hasn't been selected already, the .some() method
    //is used to check each element of the selectSquare array to see if it contains the square number click on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) { 
        let select = document.getElementById(squareNumber); //This variable retrieves the HTML element id that was clicked.
        if (activePlayer === "X") { //This condition checks who's turn it is.
            select.style.backgroundImage = "url('./images/dogX.png')"; //If activePlayer is equal to 'X', the x.png is placed in HTML.
        }
        else { //Active player may only be 'X' or 'O' so, if not 'X' it must be 'O'.
            select.style.backgroundImage = "url('./images/catO.png')"; //If activePlayer is equal to 'O', the o.png is placed in HTML.
        }
        selectedSquares.push(squareNumber + activePlayer); //squareNumber and activePlayer are concatenated together and added to array.
        checkWinConditions(); //This calls a function to check for any win conditions.
        if (activePlayer === "X") { //This condition is for changing the active player.
            activePlayer = "O"; //If active player is "X" change it to "O".
        }
        else { //If active player is anything other than "X"
            activePlayer = "X"; //change the activePlayer to "X"
        }

        audio('./media/place2.mp3'); //This function plays placement sound.
        if (activePlayer === "O") { //This condition check to see if it is the computers turn.
            disableClick(); //This function disables clicking for computers turn.
            setTimeout(function () { computersTurn(); }, 1000); //This function waits 1 second before the computer places an image and enables click.
        }
        return true; //Returning true is needed for our computersTurn() function to work.
    }
    function computersTurn() { //This function results in a random square being selected by the computer.
        let success = false; //This Boolean is needed for our WHILE loop.
        let pickASquare; //This variable stores a random number 0-8.
        while (!success) { //This condition allows our WHILE loop to keep trying if a square is selected already.
            pickASquare = String(Math.floor(Math.random() * 9)); //Random number between 0 and 8 is selected.
            if (placeXorO(pickASquare)) { //If the random number evaluated returns true, the square hasn't been selected yet.
                placeXorO(pickASquare); //This line calls the function.
                success = true; //This changes our Boolean and ENDS the loop.
            };
        }   
    }
}

//This function parses the selectedSquares array to search for win conditions.
//drawLine() function is called to draw a line on the screen if the condition is met.
// 0, 1, 2, 3, 4, 5, 6, 7, 8----------reference-----
function checkWinConditions() {
    // X 0, 1, 2 condition.
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    // X 3, 4, 5 conditon.
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    // X 6, 7, 8 condition.
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    // X 0, 3, 6 condition.
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    // X 1, 4, 7 condition.
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    // X 2, 5, 8 condition.
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    // X 6, 4, 2 condition.
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    // X 0, 4, 8 condition.
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    // O 0, 1, 2 condition.
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    // O 3, 4, 5 condition.
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    // O 6, 7, 8 condition.
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    // O 0, 3, 6 condition.
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    // O 1, 4, 7 condition.
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    // O 2, 5, 8 condition.
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    // O 6, 4, 2 condition.
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    // O 0, 4, 8 condition.
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }

    else if (selectedSquares.length >= 9) { //This condition checks for a tie. If none of the above conditions are met and 9 squares are selected the code executes.
        audio('./media/sadtrombone.mp3'); //This function plays the tie game sound.
        setTimeout(function () { resetGame(); }, 500); //This function set a .3 second timer before the resetGame is called.
    }

    function arrayIncludes(squareA, squareB, squareC) { //This function checks if an array includes 3 strings, it is used to check for each win condition.
        //These 3 variables will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //If the 3 variables we pass are all included in our array then true is returned and our false condition executes the drawLine() function.
        if (a === true && b === true && c === true) { return true; }
    }
}

function disableClick() { //This function makes our body element temporarily unclickable.
    body.style.pointerEvents = "none"; //This makes our body unclickable.
    setTimeout(function () { body.style.pointerEvents = "auto"; }, 1000); //This makes our body clickable again after 1 second.
}

function audio(audioURL) { //This function takes a string parameter of the path you set earlier for placement sound ('./media/place.mp3')
    let audio = new Audio(audioURL); //We create a new audio object and we pass the path as a parameter.
    audio.play(); //Play method plays our audio sound.
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) { //This function utilizes HTML canvas to draw win lines.
    const canvas = document.getElementById("win-lines"); //This line accesses our HTML canvas element.
    const c = canvas.getContext("2d"); //This line gives us access to methods and properties to use on canvas.
    let x1 = coordX1, //This line indicates where the start of a lines x axis is.
        y1 = coordY1, //This line indicates where the start of a lines y axis is.
        x2 = coordX2, //This line indicates where the end of a lines x axis is.
        y2 = coordY2, //This line indicates where the end of a lines x axis is.
        x = x1, //This variable stores temporary x axis data we update in our animation loop.
        y = y1; //THis variable stores temporary y axis data we update in our animation loop.

    function animateLineDrawing() { //This function interacts with the canvas.
        const animationLoop = requestAnimationFrame(animateLineDrawing); //This variable creates a loop.
        c.clearRect(0, 0, 608, 608); //This method clears content from the last loop iteration.
        c.beginPath(); //This method starts a new path.
        c.moveTo(x1, y1); //This method moves us to a starting point in our line.
        c.lineTo(x,y); //This method indicates the end point in our line.
        c.lineWidth = 10; //This method sets the width of our line.
        c.strokeStyle = "rgba(70, 255, 33, .8"; //This method sets the color of our line. 
        c.stroke(); //This method draws everything we laid out above.
        if (x1 <= x2 && y <= y2) { //This condition checks if we've reached the endpoints.
            if (x < x2) { x += 10; } //This condition adds 10 to the previous end x endpoint.
            if (y < y2) {y += 10; } // This condition adds 10 to the previous end y endpoint.
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); } //This is necessary for the 6,4,2 win conditions.
        }
        if (x1 <= x2 && y1 >= y2) { //This condition is similiar to the one above, this is necessary for the 6,4,2 win conditions.
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    function clear() { //This function clears our canvas after our win line is drawn.
        const animationLoop = requestAnimationFrame(clear); //This line starts our animation loop.
        c.clearRect(0, 0, 608, 608); //This line clears our canvas.
        cancelAnimationFrame(animationLoop); //This line stops our animation loop.
    }

    disableClick(); //This line disallows clicking while the win sound is playing.
    audio('./media/tada.mp3'); //This line plays the win sounds.
    animateLineDrawing(); //This line calls our main animation loop.
    setTimeout(function () { clear(); resetGame(); }, 1000); //This line waits 1 second, then, clears canvas, resets game, and allows clicking again.
}

//The checkWinConditions() function checks for every possible winning scenario of either an X or an O placed in a square. Each square has its own index number starting from 0 - 8. 
//The second if statement in animateLineDrawing() was needed for the 6, 4, and 2 index squares if either X or O won on the diagonal line from right to left.

function resetGame() { //This function resets the game in the event of a tie or a win.
    for (let i = 0; i < 9; i++) { //This FOR loop iterates through each HTML square element.
        let square = document.getElementById(String(i)); //This variable gets the HTML element i.
        square.style.backgroundImage = ""; //This removes our elements backgroundImage.
    }
    selectedSquares = [] //This resets our array so it is empty and we can start over.
}