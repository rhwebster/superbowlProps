const Player = require('./player');

const winningBets = {
    coinToss: null, anthem: null, firstPlayer: null, firstPlay: null,
    firstHalfPts: null, nonQB: null, performer: null, halftimeSongs: null,
    snoopSmoke: null, thirdQtrScore: null, twoPt: null, dstTD: null, highQtr: null,
    bitcoinPrice: null, oneFifty: null, longestPlay: null, kuppChase: null,
    staffordBurrow: null, gatorade: null, mvp: null, winner: null
}

function sbProps(obj, arr) {
    for (const key in obj) {
        payout(arr, key)
    }
    return arr.forEach(player => console.log(`${player.name} : ${player.winnings}`));
}

function payout(arr, key) {
    let betWinners = [];

    betWinners = arr.filter(winner => winner[key] === winningBets[key]);

    let betPayout = arr.length / betWinners.length;

    if (key === 'winner') betPayout *= 5;

    betWinners.forEach(winner => winner['winnings'] += betPayout);
}