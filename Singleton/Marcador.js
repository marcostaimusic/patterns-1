class Marcador {
    constructor(){
        if (Marcador.instance == null){
            this.board=[]
            Marcador.instance = this
        } else {
            throw new Error ('Impossible to instantiate another Marcador')
        }
        return Marcador.instance
    }

    
    join(name) {
        this.board.push({
            name,
            points: 0
        });
    }

    leave(name) {
        this.board = this.board.filter(player => player.name !== name);
    }

    update(name, points) {
        const playerIdx = this.board.findIndex(player => player.name === name);
        if (playerIdx > -1) {
            this.board[playerIdx].points += points;
        }
    }

    showScores() {
        return this.board;
    }
    
    addPlayer(name){
        this.board.push({name, points:0})
    }

    removePlayer(name){
        this.board = this.board.filter(player => player.name === name)
    }

    sort() {
        return this.board.sort((p1, p2) => p2.points - p1.points);
    }

    getWinner() {
        return this.sort()[0];
    } 


}

const marcador = new Marcador()
Object.freeze(marcador)
module.exports = marcador
