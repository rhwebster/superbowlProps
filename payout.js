const bets = require('./bets');
const players = require('./players');

function sbProps(obj, arr) {
    for (const key in obj) {
        payout(arr, obj, key)
    }
    return arr.forEach(player => console.log(`${player.name} : ${player.winnings}`));
}

function payout(arr, obj, key) {
    let betWinners = [];

    betWinners = arr.filter(winner => winner[key] === obj[key]);

    let betPayout = arr.length / betWinners.length;

    if (key === 'winner') betPayout *= 5;

    betWinners.forEach(winner => winner['winnings'] += betPayout);
}

sbProps(bets, players)
