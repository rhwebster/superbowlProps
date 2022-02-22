const bets = require('./bets');
const players = require('./players');

const propsPayout = (obj, arr) => {
    for (const key in obj) {
        let betWinners = arr.filter(player => player[key] === obj[key]);

        let betPayout = arr.length / betWinners.length;

        if (key === 'winner') betPayout *= 5;

        betWinners.forEach(winner => winner['winnings'] += betPayout);
    }
    
    return arr.sort((a, b) => b.winnings - a.winnings)
        .forEach(player => console.log(`${player.name} : ${player.winnings}`));
}

propsPayout(bets, players);
