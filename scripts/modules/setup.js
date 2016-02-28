var Game = {

    // generate game references

    app: {

        wrongSpot: document.getElementById('wrongSpot'),
        game: [],
        nextMove: [],
        x: 0,
        newValue: undefined,
        n: 0,
        counter: 0,
        gameStatus: function(status) {

            'use strict';

            if (status === 'start') {

                status = Game.app.wrongSpot.innerText = 'Lets Go!!!';

            }
        }
    }

};







