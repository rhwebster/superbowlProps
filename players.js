const Player = require('./playerClass');

const ryan = new Player('Ryan', 'tails', 'under', 'Burrow', 'run', 'odd', 'yes', 
    'snoop', 'over', 'yes', 'yes', 'yes', 'yes', '3', 'yes', 'yes', 'over', 'over',
    'over', 'blue', 'no', 'rams');

const zack = new Player('Zack', 'heads', 'over', 'other', 'pass', 'even', 'yes', 
    'eminem', 'over', 'no', 'yes', 'no', 'yes', '4', 'yes', 'yes', 'over', 'over',
    'under', 'orange', 'yes', 'bengals');

let players = [ryan, zack];

module.exports = players;