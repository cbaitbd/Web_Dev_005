// alert("hello");

// console.log(" 1 * 5 = 5");
// console.log(" 2 * 5 = 10");

// let numberField = document.getElementById('numberField');
// const showResult = () => {
//     console.clear();
//     let num = parseInt(numberField.value);
//     for(let i = 1; i <=10; i++){
//         console.log(num +" * "+ i + " = " + (num * i) );
//     }
// }


// let randNum = parseInt(Math.random() *  99 + 1);

// let numberField = document.getElementById('numberField');
// const showResult = () => {
//     let inputedNum = parseInt(numberField.value);

//     if(randNum < inputedNum){
//         alert("Your Guess is Big");
//     }else if(randNum > inputedNum){
//         alert("Your Guess is Small");
//     }else if(randNum === inputedNum){
//         alert("Congratulations!!!");
//         randNum = parseInt(Math.random() *  99 + 1);
//     }
// }

// let obj = { name: "Mustafiz", age: 17, village: "Janina"}
// for(x in obj){
//     console.log(obj[x])
// }

// let arr = [25, 69, true, "Alamgir", null ]

// for(x in arr){
//     console.log(arr[x])
// }

// for (v of arr){
//     console.log(v);
// }

// const myCallBack = (v, i ) => {
//     console.log(v, i);
// } 
 
// console.log(arr)

// let i = 0;

// while( i < 10){
//     console.log(i);

//     i++;
// }

//  do {
//     console.log(i)
//     i++; 
// }while (i < 10);

// for(let i = 10; i > 0; i--){
//     console.log(i);
// }

let numberField = document.getElementById('numberField');
let tBody = document.getElementById('resultTbody');
const showResult = () => {
    tBody.innerHTML = "";
    let num = parseInt(numberField.value);
    for(let i = 1; i <=10; i++){
        tBody.innerHTML =   `${tBody.innerHTML}
        <tr>
            <td> ${num} * ${i} </td>
            <td> = </td>
            <td> ${num * i} </td>
        </tr>`;                     
    }
}

