const marcador = require('./Marcador');

var Game = class Game {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    join(player) {
        marcador.join(player.name);
    }
}

module.exports = Game
