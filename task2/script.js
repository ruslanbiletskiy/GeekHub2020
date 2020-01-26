console.log("Завдання 1");
var a = 0;
if (a > 0) {
    console.log(1)
} else if (a == 0) {
    console.log(0)
} else console.log(-1);

console.log("Завдання 2");
var login, password;
console.log("who's here");
login = "Admin";
if (login == "Cancel") {
    console.log("canceled")
} else if (login == "Admin") {
    console.log("Admin");
    password = "TheMaster";
    console.log("password:" + password);
    if (password == "Cancel") {
        console.log("Canceled.")
    } else if (password == "TheMaster") {
        console.log("Welcome!")
    } else console.log("Wrong password");
} else console.log("I don't know you");
//111