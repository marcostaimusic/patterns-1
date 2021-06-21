const marcador = require('./Marcador');

var Player = class Player{

    static nextId = 1

    constructor(name){
        this._name = name;
        Player.nextId++
    }

    get id(){return this._id}
    get name(){return this._name}
    get points(){return this._points}

    win(points) {
        marcador.update(this._name, points);
    }

    lose(points) {
        marcador.update(this._name, -points);
    }

}

module.exports = Player





