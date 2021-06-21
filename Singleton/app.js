const marcador = require('./Marcador');
const Game = require('./Game');
const Player = require('./Player');



const AAGame = new Game('AA-game');
const BBGame = new Game('BB-game');
const jack = new Player('Jack');
const adam = new Player('Adam');
const katherin = new Player('Katherin');

AAGame.join(jack);
AAGame.join(adam);
BBGame.join(katherin);

jack.win(100);
jack.win(100);
jack.lose(50);

adam.lose(100);
adam.win(200);

katherin.win(100);
katherin.win(200);

console.log('AA: ', AAGame.name);
console.log('BB: ', BBGame.name);
console.log('points: ', marcador.showScores());
console.log(`Winner: ${marcador.getWinner().name}, points: ${marcador.getWinner().points}`);