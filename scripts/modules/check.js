var Game = Game || {};

Game.advance = function(a){

    'use strict';

    var userInput = document.getElementById('userInput'),
        acceptableMoves = ['left', 'right', 'up', 'down'];

    a = userInput.value;
    a.toLocaleLowerCase();

    if (acceptableMoves.lastIndexOf(a) !== -1) {

        if (a === 'left') {

            return Game.update(a);

        } else if (a === 'right') {

            return Game.update(a);

        } else if (a === 'up') {

            return Game.update(a);

        } else if (a === 'down') {

            return Game.update(a);

        }

    } else {

        Game.app.wrongSpot.innerText = 'That is not a valid move';
        return Game.tryAgain();
    }

};

