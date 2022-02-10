const winningBets = {
    coinToss: null, anthem: null, firstPlayer: null, firstPlay: null,
    firstHalfPts: null, nonQB: null, performer: null, halftimeSongs: null,
    snoopSmoke: null, thirdQtrScore: null, twoPt: null, dstTD: null, highQtr: null,
    bitcoinPrice: null, oneFifty: null, longestPlay: null, kuppChase: null,
    staffordBurrow: null, gatorade: null, mvp: null, winner: null
}

class Player {
    constructor(name, coinToss, anthem, firstPlayer, firstPlay, firstHalfPts,
        nonQB, performer, halftimeSongs, snoopSmoke, thirdQtrScore,
        twoPt, dstTD, highQtr, bitcoinPrice, oneFifty, longestPlay,
        kuppChase, staffordBurrow, gatorade, mvp, winner, winnings = 0) {
        this.name = name;
        this.coinToss = coinToss;
        this.anthem = anthem;
        this.firstPlayer = firstPlayer;
        this.firstPlay = firstPlay;
        this.firstHalfPts = firstHalfPts;
        this.nonQB = nonQB;
        this.performer = performer;
        this.halftimeSongs = halftimeSongs;
        this.snoopSmoke = snoopSmoke;
        this.thirdQtrScore = thirdQtrScore;
        this.twoPt = twoPt;
        this.dstTD = dstTD;
        this.highQtr = highQtr;
        this.bitcoinPrice = bitcoinPrice;
        this.oneFifty = oneFifty;
        this.longestPlay = longestPlay;
        this.kuppChase = kuppChase;
        this.staffordBurrow = staffordBurrow;
        this.gatorade = gatorade;
        this.mvp = mvp;
        this.winner = winner;
        this.winnings = winnings;
    }
}

