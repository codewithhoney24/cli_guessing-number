#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue("\n\tWelcome to code-with-honey Cli Number Guessing Game\n"));

const randomNumber = Math.floor(Math.random() * 6 + 1) ;

const answer = await inquirer.prompt([
    {
        name :    "userGuessedNumber",
        type :    "number",
        message : "(Enter your guess number (Number limit from 1 to 6) :"

    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log(chalk.green("\n\tCongratulation! You Guess a Correct Number.\n"));
}
else {
    console.log(chalk.red("\n\tSorry! You Guess a Wrong Number.\n"));
}