// console.log("OK")

// console.log(Math.pow(13, 6));

//  1. == equal
//  2. != not equal
//  3. < less than
//  4. > greater than
//  5. <= less then or equal
//  6. >= greater or equal

// var num = 10;
// var str = "10";

// console.log(num === str);


// var name = "IA Masum";
// var bio = "It's very nice."; // solve 1
// var bio2 = 'It\'s Very nice'; // solve 2
// var bio3 = `It's very nice. He says "He is a nice boy!"`; // solve 3

// var fName = "Abdul";
// var lName = "Alim";

// var fullName = fName + " " + lName;

// var textLine = "I live in Bangladesh. It's a beautiful country. Bangladesh";
// var name = "            Imran         "

// console.log(name.trim())

// console.log("5" + 5 + true );

// console.log(Math.max(12, 15, 10, 100, 35, 12));

// function salamDau(name){
//     console.log("Assalamu Alaikum! " + name);
// } 

// salamDau("Momin");
// salamDau("Arafat");

// salamDau("Maruf");

// function add(number1, number2){
//     console.log(number1 + number2);
// }


// add(10, 5);
// add(10, 25);

// function returnResult(number1, number2){
//     return number1 + number2;
// }

// var result = returnResult(10, 5);

// console.log(result);


// function myFun(){
//     console.log("Click Kora Hoyece....")
// }

// var input = document.getElementById("inputField");
// var input2 = document.getElementById("inputField2");
// var resultField = document.getElementById("result");

// function add (){
//     var num1  = parseInt(input.value) ;
//     var num2  = parseInt(input2.value);
//     resultField.innerText = num1 + num2;
// }

// function sub (){
//     var num1  = parseInt(input.value) ;
//     var num2  = parseInt(input2.value);
//     resultField.innerText = num1 - num2;
// }

// var codition = true;

// if(codition){
//     console.log("I am In.");
// }

// var passField = document.getElementById("pass");
// var dataPass = "12345";

// function logIn(){
//     var userPass = passField.value;

//     if(userPass == dataPass){
//         alert("Password Match");
//     }else {
//         alert("Password Doesn't Match");
//     }

// }

// var numberField = document.getElementById("numberField");

// function check(){
//     var number = parseInt(numberField.value);

//     if(number % 2 == 0){
//         alert("Number Is Even.");
//     }else{
//         alert("Number Is Odd.");
//     }
// }

// var numberField = document.getElementById("charField");

// function check(){
//     var char = charField.value.toLowerCase();

//     if(char == 'a'){
//         alert("Vowel")
//     }else if(char == 'e'){
//         alert("Vowel")
//     }else if(char == 'i'){
//         alert("Vowel")
//     }else if(char == 'o'){
//         alert("Vowel")
//     }else if(char == 'u'){
//         alert("Vowel")
//     }else {
//         alert("Consonant")
//     }
// }


// function check(){
//     var year = parseInt(numberField.value);

//     if(year % 4 == 0){
//         alert("Leap Year");
//     }else{
//         alert("Not Leap Year");
//     }
// }


// Array ...

// var names = ["Arafat", "Alomgir", "Mustafiz", "Momin"];

// console.log(names);

// names.shift();

// push("name");
// pop();
// shift();
// unshift("name");

// console.log(names);

// var nameField = document.getElementById('name');
// var nameList = document.getElementById("nameList");
// var names = [];

// function addName () {
//     var name = nameField.value;
//     // nameList.innerHTML = nameList.innerHTML + "<li>" + name + "</li>";
//     names.unshift(name);
//     console.log(names);
// }

// function removeFirst () {
//     names.shift();
//     console.log(names);
// }

// function removeLast(){
//     names.pop();
//     console.log(names);
// }

// var name = "Maruf";

// function myFunc (){
//     // console.log(name);
//     // var name = "Momin";
//     // console.log(name);
// }

// myFunc();

// console.log(name);

// const number;

// number = 2;

// number = "number string";

// number = ['one', 'two'];

// console.log(number)

// const number = [1, 2, 3, 5]

// number.push(6);

// console.log(number);

function myFunc () {

}

// const myArrow = () => {
//     console.log("I am arrow function");
// }
// const myArrow = () => console.log("I am arrow function");
// const add = (num1, num2) =>  num1 + num2;
// const sayHello = name => console.log("Hello, "+name+"!");
// const sayHello = (name = "Imran") => console.log("Hello, "+name+"!");

// sayHello("Rasel");

const parret = () => {
    console.log("I Am Parrent");
    return () => {
        console.log("Amar nam nai...")
    }
}

// let inner = parret();
// inner();
// parret()();
// let count = 0;
// const hey = ( ) => {
//     console.log("Hey", ++count)
// }

// let inter = setInterval(hey, 1000);


// const one = () => {
//     console.log("one");
// }
// const three = () => {
//     console.log("Three")
// }
// const two = nextFun => {
//     console.log("Two");
//     nextFun();
// }
// two(one);
// two(three);


// let arr = [5, 6, 8, 10, 36, 19, 100, 2, 69, 45, 13, 8];

// let find = arr.find(elm => elm < 10);

// let lessThenTen = arr.filter( elm => elm < 10);
// let greaterThenTen = arr.filter( elm => elm > 10);

// console.log(lessThenTen);
// console.log(greaterThenTen);

// arr.sort( (x, y) => x - y);

// console.log(arr);

// let person = {
//     name: "Rasel",
//     age: 21,
//     isBlack: false,
//     skills: ['HTML', "CSS", "Bootstrap", "JavaScript"],
//     address: {
//         village: "Amgaci Cholkpara",
//         post: "Pana Nagar",
//         thana: "Puthia",
//         dis: "Rajshahi"
//     },
// };

// console.log(person.skills[2])



// for(let i = 0; i <= 10; i++){

   

// }


// let names = ["Arafat", "Alomgir", "Mustafiz", "Momin"];

// for( let i = 0; i < names.length; i++){

//     if(i === 2){
//         break;
//     }
//    console.log(names[i]);
// }

// break; continue;















