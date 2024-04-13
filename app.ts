import inquirer from "inquirer";

//asking question from user through inquirer

let answer = await inquirer.prompt([
    {message :"enter your first number", type : "number", name :"firstNumber"},
    {message :"enter your second number", type : "number", name :"secondNumber"},

    {
        message: " select one operator for operations",
        type : "list",
        name: "operators",
        choices : ["add","sub","multiply","divide"]
    },
]);

//condition if else
if(answer.operators === "add"){
    console.log(answer.firstNumber + answer.secondNumber)
}
else if (answer.operators === "sub"){
    console.log(answer.firstNumber - answer.secondNumber)
}
else if(answer.operators === "multiply"){
    console.log(answer.firstNumber * answer.secondNumber)
}
else if(answer.operators === "divide"){
    console.log(answer.firstNumber / answer.secondNumber)
}
else {
    console.log("invalid input")
}