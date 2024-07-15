#! /usr/bin/env node

import inquirer from "inquirer";

//const randomNumber =3; // hard codded
const randomNumber = Math.floor(Math.random() * 10 + 1 );
const number = await inquirer.prompt([

    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Please Guess the number from 1 t0 10: ",
    },

]);
if(number.UserGuessedNumber === randomNumber){
console.log("Conngratulations! You guessed the right number.");

}else{
console.log("Oooppps! Your guessed is wrong number");

}
