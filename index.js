// Module package CORE
// setTimeout(function  () {
//     console.log("ishga tushdi");
// }, 5000);

// let number = 0;
// setInterval(function () {
//     console.log("hisob", number);
//     number++;
// }, 0);

// const fs = require('fs');
// const { networkInterfaces } = require("os");
// const data = fs.readFileSync('./input.txt', 'utf8');
// console.log(data);

// console.log('*************************************************')

// fs.writeFileSync('./input.txt', `${data} \n\t\t by Lucas Ali`);
// const new_data = fs.readFileSync("./input.txt", "utf-8");
// console.log(new_data);

// Module package EXTERNAL

// const moment = require("moment");
// console.log(time);
// setInterval(() => {
//     const time = moment().format("");
//     console.log(`hozirgi vaqt: ${time}`);
// }, 5000);

// const inquirer = require("inquirer");
// inquirer
//   .prompt([{type: 'input', name: 'raqam', message: "raqamni kiriting?" }])
//   .then(answer => {
//     console.log("man kiritgan raqam qiymati:", answer.raqam);
//   })
//   .catch((err) => console.log(err));

// const validator = require("validator");
// const test = validator.isIP("211.112.158.4"); //=> true
// console.log("test:", test);

// const { v4: uuidv4 } = require('uuid');
// const random = uuidv4();
// console.log("random:", random);

// const chalk = require('chalk');
// const log = console.log;

// log(chalk.bgYellowBright(`uuid creates ${random}`)); 

// Module package FILE 
// console.log(require("module").wrapper);


// const calculate = require('./hisob.js');

// const natija = calculate.kopaytirish(80, 20);
// console.log("Natija:", natija);

// console.log('*********************');

// const natija2 = calculate.qoshish(80, 20);
// console.log("Natija:", natija2);

// console.log("*********************");

// const natija3 = calculate.ayirish(80, 20);
// console.log("Natija:", natija3);

// console.log("*********************");

// const natija4 = calculate.bolish(80, 20);
// console.log("Natija:", natija4);

// console.log(arguments);

const Account = require("./account");

Account.tellMeTime();
console.log("=================");
const myAccount = new Account ("Lucas", 200000, 5123123123123);
myAccount.giveMeDetails();

myAccount.makeDeposit(1000000);

// bugatti chiyron 2,4mln usd
//ferrariz 400000 usd
myAccount.withdrawMoney(400000);
myAccount.makeDeposit(200000);