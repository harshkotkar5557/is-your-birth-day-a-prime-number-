var readlineSync = require('readline-sync')
var chalk = require('chalk')

console.log(chalk.bold.blue('---is your birth day a prime number?--'))
console.log('------------------------------------')
var userName = readlineSync.question("Enter your name : ")
var birthdate = readlineSync.question('Birthdate(DD/MM):   ')
if(!birthdate.includes('/')){
  console.log(chalk.red("***Please enter birthdate in fromat DD/MM***"))
  var birthdate = readlineSync.question('Birthdate(DD/MM):   ')
}
var birthDay =birthdate.split('/')[0]
var birthMonth =birthdate.split('/')[1]
if(birthDay > 31){
 console.log("Enter Valid date")
}
if(birthMonth=== 2 && birthDay > 29 ){
    console.log(chalk.red("Enter Valid input"))  
}
if(birthMonth > 12){
  console.log(chalk.red("Enter Valid month"))
}

function checkPrimeNumber(month,birthDay){
  var total = month + birthDay
  if(total % total == 0 && total % 1 == 0  ){
    console.log(chalk.bgGreen(`${userName},Your birthdate is prime number`))
  }else{
    console.log(chalk.bgRed(`${userName},Your birthdate is not prime number`))
  }

}

checkPrimeNumber(birthMonth,birthDay)