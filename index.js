#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([{
        name: "usergussednumber",
        type: "number",
        message: "please type a number:",
    }]);
if (answer.usergussednumber === randomnumber) {
    console.log("u guess right number");
}
else {
    console.log("u guess wrong number");
}
