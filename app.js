/*  create an array of possible moves
    create an array of steps to exit
    create and empty array from user input
    need a function to generate the game
    need a function that accepts a string
        - statements to check that a string was inputed not a number
    need a function that checks if the string is an allowed move
        - statements to check against possible moves
    need a function to check if that move is the next move
        - statement to check if current move matches the next step
    need a function to process move and display message
        - if move doesnt match then the player must enter another move
        - if it matches then the counter will advance to the next possible move
    need a function that checks if all the play inputs match the game path
        - checks to see if the gamepath is the same and if it is then a message appears
 */

(function(){

    var start = document.getElementById('start'),
        wrongSpot = document.getElementById('wrongSpot'),
        userInput = document.getElementById('userInput'),
        acceptableMoves = ['left','right','up','down'],
        game = [],
        nextMove = [],
        x,
        newValue,
        n = 0;

    for ( x = 1; x < 12; x++) {

        newValue = Math.ceil(Math.random() * 4);
        console.log(newValue);

        if (newValue === 1) {

        newValue = 'left';
        game.push(newValue);

        } else if( newValue === 2){

            newValue = 'right';
            game.push(newValue);

        } else if( newValue === 3){

            newValue = 'up';
            game.push(newValue);

        } else if( newValue === 4){

            newValue = 'down';
            game.push(newValue);

        }

    }

    function init () {

        'use strict';

         // Error handling

        function tryAgain(){

            wrongSpot.innerText = 'That move was not correct';

        }

        // Checks to see if move is next move

        function message(){

            var i;

            for ( i = n; i < nextMove.length; i++) {

                for( i = n; i < game.length; i++){

                    if (game.indexOf(nextMove[i]) !== -1) {

                        console.log('found');

                        if (game[i] === nextMove[i]){

                            console.log('right spot');
                            n++;
                            return  cool();

                        } else {

                        console.log('error');
                        nextMove.pop();
                        return tryAgain();

                        }

                    } else {

                        console.log('error');
                        nextMove.pop();
                        return tryAgain();

                    }
                }

            }

        }

        // Get next input

        function update (movement){

            nextMove.push(movement);
            message();

        }

        // User Logic

        function go(a) {

            a = userInput.value;
            a.toLocaleLowerCase();

            if (acceptableMoves.lastIndexOf(a) !== -1) {

                if (a === 'left') {
                    console.log('ok');
                    console.log(a);
                    return update(a);

                } else if (a === 'right') {
                    console.log('ok');
                    console.log(a);
                    return update(a);

                } else if (a === 'up') {
                    console.log('ok');
                    console.log(a);
                    return update(a);

                } else if (a === 'down') {
                    console.log('ok');
                    console.log(a);
                    return update(a);

                }

            } else {

                console.log('that is not a valid move');

                return tryAgain();
            }

        }

        go();
    }

    function cool(){

        wrongSpot.innerText = 'That was correct. Keep going!!!';
    }

    start.addEventListener('click', init);

}());