/** Read Data from User */
//readline-sync works only in terminal 
//To run the code type command "node file name" on terminal
//To install package type command "npm i package name" i.e. npm i readline-sync

const readlineSync = require("readline-sync");
const userName = readlineSync.question("May i know your name?");
console.log(userName);