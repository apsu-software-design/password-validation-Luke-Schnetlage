//Luke Schnetlage
//CSCI 4602-12
//9/7/2021

const validatePassword = require('./passwordvalidation'); //import the function

// Your code goes here!
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


askForPassword();


function askForPassword() {
    rl.question("Enter a password to validate (or :q to quit)", (password) => {
        if (password != "q") {
            if (validatePassword(password)) {
                console.log(`The password is valid: ${password}`);
            } else{
                console.log(`The password is invalid: ${password}`);
            }
            askForPassword(); 
        } else {
            console.log("Goodbye!");
            rl.close();
        }
    });
}