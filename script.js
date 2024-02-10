let numString = "46";

let num = Number(numString);
console.log(num); 

let str = String(num);
console.log(str);  


let x = true;
let y = false;

console.log(x && y);  
console.log(x && true); 


const me = {
    name: "soso",
    age: 15,
    location: "Gurjaani",
    job: ["student"],
};

const you = {
    name: "luka",
    age: 17,
    location: "Kutaisi",
    job: ["Mentor"],
};

console.log(me);
console.log(you);

var string1 = "vashli";
var string2 = "atami";
var number1 = 15;
var number2 = 10;

console.log("თანასწორობის შემოწმება");
console.log(string1 == string2);
console.log(number1 == number2);

for (let i = 0; i < 101; i++) {
    console.log(i);
}

for (let i = 100; i > -1; i--) {
    console.log(i)
}

const myFriend = "Luka";
const friendName = "Nika"; 

if (myFriend === friendName) {
    console.log("Hello my friend");
} else {
    console.log("Yout are not my friend")
}

let i = 0;

while (i <= 100) {
    console.log(i);
    i += 5;
}