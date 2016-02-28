var Game = Game || {};

Game.gameBoard =  (function(){

    'use strict';

    for (Game.app.x = 1; Game.app.x <= 10; Game.app.x++) {

        Game.app.newValue = Math.ceil(Math.random() * 4);

        if (Game.app.newValue === 1) {

            Game.app.newValue = 'left';
            Game.app.game.push(Game.app.newValue);

        } else if (Game.app.newValue === 2) {

            Game.app.newValue = 'right';
            Game.app.game.push(Game.app.newValue);

        } else if (Game.app.newValue === 3) {

            Game.app.newValue = 'up';
            Game.app.game.push(Game.app.newValue);

        } else if (Game.app.newValue === 4) {

            Game.app.newValue = 'down';
            Game.app.game.push(Game.app.newValue);

        }

    }

}());
