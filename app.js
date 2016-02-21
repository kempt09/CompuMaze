function startGame(status) {

    // Global variables and generate game references

    var start = document.getElementById('start'),
        wrongSpot = document.getElementById('wrongSpot'),
        userInput = document.getElementById('userInput'),
        acceptableMoves = ['left', 'right', 'up', 'down'],
        game = [],
        nextMove = [],
        x,
        newValue,
        n = 0,
        counter = 0;

    if (status === undefined){
        status = wrongSpot.innerText = 'Lets Go!!!';
    }

    wrongSpot.innerText = status;

    for (x = 1; x <= 10; x++) {

        newValue = Math.ceil(Math.random() * 4);

        if (newValue === 1) {

            newValue = 'left';
            game.push(newValue);

        } else if (newValue === 2) {

            newValue = 'right';
            game.push(newValue);

        } else if (newValue === 3) {

            newValue = 'up';
            game.push(newValue);

        } else if (newValue === 4) {

            newValue = 'down';
            game.push(newValue);

        }

    }

    function init() {

        'use strict';

        // Error handling

        function tryAgain() {

            counter++;

            if (counter === 4) {

                startGame('You lost, try again');

            } else {

                wrongSpot.innerText = 'That move was not correct';
            }
        }

        // Checks to see if move is next move

        function message() {

            var i;

            for (i = n; i < nextMove.length; i++) {

                for (i = n; i < game.length; i++) {

                    if (game.indexOf(nextMove[i]) !== -1) {

                        if (game[i] === nextMove[i]) {

                            n++;
                            return cool();

                        } else {

                            nextMove.pop();
                            return tryAgain();

                        }

                    } else {

                        nextMove.pop();
                        return tryAgain();

                    }
                }

            }

        }

        // Get next input

        function update(movement) {

            nextMove.push(movement);
            message();

        }

        // User Logic

        function go(a) {

            a = userInput.value;
            a.toLocaleLowerCase();

            if (acceptableMoves.lastIndexOf(a) !== -1) {

                if (a === 'left') {

                    return update(a);

                } else if (a === 'right') {

                    return update(a);

                } else if (a === 'up') {

                    return update(a);

                } else if (a === 'down') {

                    return update(a);

                }

            } else {

                wrongSpot.innerText = 'That is not a valid move';
                return tryAgain();
            }

        }

        //  Checks if player has finished

        function cool() {

            if (nextMove.length === 10) {

                wrongSpot.innerText = "You win!!!";

            } else {

                wrongSpot.innerText = 'That was correct. Keep going!!!';

            }

        }

        go();
    }

    start.addEventListener('click', init);

}

startGame();