console.log('starting app.');

const fs = require('fs');
const os= require('os');
const notes = require('./notes.js')
const _ = require ('lodash');

//console.log(_.isString(true));
//console.log(_.isString('Muneeb'));
var filteredArray = _.uniq(['Muneeb', 1, 2, 'Muneeb', 2, 4]);
console.log(filteredArray);
//const _ = require('lodash');
//var user = os.userInfo();
//fs.appendFile('greetings.txt',`Hello ${user.username}! You are ${notes.age}.`); 