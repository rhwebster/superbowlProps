const Player = require('./playerClass');

const ryan = new Player('Ryan', 'heads', 'over', 'burrow', 'run', 'odd', 'yes', 
    'snoop', 'over', 'no', 'yes', 'yes', 'yes', '3', 'yes', 'yes', 'over', 'under',
    'over', 'blue', 'no', 'rams');

const zack = new Player('Zack', 'heads', 'over', 'other', 'pass', 'even', 'yes', 
    'eminem', 'over', 'no', 'yes', 'no', 'yes', '4', 'yes', 'yes', 'over', 'over',
    'under', 'orange', 'yes', 'bengals');
    
const andy = new Player('Andy', 'heads', 'over', 'other', 'pass', 'even', 'no',
    'kendrick', 'over', 'no', 'yes', 'no', 'no', '3', 'yes', 'yes', 'over', 'under',
    'over', 'blue', 'no', 'bengals');


const dad = new Player('Dad', 'heads', 'under', 'burrow', 'run', 'odd', 'no',
    'eminem', 'over', 'no', 'yes', 'yes', 'yes', '4', 'no', 'yes', 'over', 'under',
    'over', 'orange', 'yes', 'rams')

const jimmy = new Player('Jimmy', 'heads', 'over', 'other', 'pass', 'odd', 'no',
    'snoop', 'over', 'no', 'yes', 'no', 'no', '4', 'no', 'yes', 'under', 'over',
    'over', 'yellow', 'yes', 'rams');

const mara = new Player('Mara', 'heads', 'over', 'other', 'pass', 'odd', 'yes',
    'eminem', 'over', 'no', 'yes', 'no', 'yes', '3', 'no', 'yes', 'over', 'over',
    'over', 'blue', 'yes', 'rams');

const drew = new Player('Drew', 'tails', 'over', 'burrow', 'run', 'odd', 'yes',
    'mjb', 'over', 'no', 'yes', 'no', 'no', '4', 'no', 'no', 'under', 'under',
    'under', 'yellow', 'yes', 'bengals');

const em = new Player('Em', 'tails', 'under', 'stafford', 'pass', 'odd', 'no', 
    'eminem', 'over', 'yes', 'yes', 'yes', 'yes', '4', 'yes', 'no', 'under', 'under',
    'over', 'orange', 'no', 'rams');

const alicia = new Player('Alicia', 'heads', 'under', 'stafford', 'run', 'odd', 'yes', 
    'dre', 'over', 'yes', 'yes', 'yes', 'yes', '4', 'yes', 'no', 'over', 'under',
    'over', 'yellow', 'yes', 'bengals');


const david = new Player('David', 'heads', 'over', 'burrow', 'pass', 'odd', 'no',
    'eminem', 'over', 'no', 'yes', 'no', 'no', '3', 'yes', 'yes', 'over', 'over', 
    'under', 'yellow', 'no', 'rams');

const becca = new Player('Becca', 'heads', 'over', 'burrow', 'pass', 'odd', 'no', 
    'eminem', 'over', 'no', 'yes', 'no', 'no', '3', 'no', 'yes', 'over', 'over', 
    'under', 'red', 'yes', 'bengals');

const chris = new Player('Chris', 'heads', 'over', 'burrow', 'pass', 'odd', 'no',
    'dre', 'over', 'no', 'yes', 'no', 'no', '4', 'yes', 'yes', 'over', 'under', 
    'under', 'yellow', 'yes', 'bengals')

const jayson = new Player('Jayson', 'tails', 'over', 'stafford', 'pass', 'even', 'no',
    'dre', 'over', 'no', 'yes', 'yes', 'no', '4', 'yes', 'no', 'over', 'under', 
    'over', 'orange', 'yes', 'rams');


let players = [ryan, zack, drew, andy, em, 
               mara, dad, jimmy, alicia, chris, 
               jayson, becca, david];

module.exports = players;