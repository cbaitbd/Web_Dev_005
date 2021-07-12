// DOM
// D = Document
// O = Object
// M = Model

// document.write("Hello <br>")
// document.write("Hello new")

// let div = document.getElementById('myDiv');
// let p = document.getElementsByTagName('p');
// let classCollection = document.getElementsByClassName('myClass')

// let elm = document.querySelector('#myDiv');
// let elm = document.querySelector('p');
// let elm = document.querySelector('.myClass');
// let elms = document.querySelectorAll('.myClass');

// let result = document.querySelector('#result')

// result.innerHTML = '<h1>Hello HTML</h1>';

// result.setAttribute('style', "background-color: red ");
// result.setAttribute('title', 'I Am From JS');

// result.removeAttribute("role");

// let display = document.querySelector('#display')
// let intialImage = 1;

// let url = "http://127.0.0.1:5500/image/01.jpg"

// display.setAttribute('src',"http://127.0.0.1:5500/image/02.jpg" )

// function nextImage() {

//     if(intialImage >= 4){
//         intialImage = 1
//     }else{
//         intialImage += 1
//     }

//     display.src = `./image/0${intialImage}.jpg`
//     display.alt = "NEW IMAGE"

// }

// function preImage () {
//     if(intialImage <= 1){
//         intialImage = 4
//     }else{
//         intialImage -= 1
//     }

//     display.src = `./image/0${intialImage}.jpg`
// }


// setInterval(nextImage, 3000);

// function $(selector){
//     if(selector[0] == '#'){
//         return document.querySelector(selector)
//     }else{
//         return document.querySelectorAll(selector)
//     }
// };

// let result =  $('#result');

// result.style.border = 'solid black 5px';
// result.style.height = '300px';
// result.style.margin = '20px';
// result.style.backgroundColor = 'red';


// console.log(result.classList.add('so'))
// console.log(result.classList.remove('classOne'))

// let hide = () => {
//     result.style.display = 'none';

//     setTimeout(function(){
//         result.style.display = 'block';
//     }, 3000)
// }


// result.addEventListener('mouseover', () => {
//     result.innerHTML = parseInt(result.innerHTML) + 1 
// });


// let inpt = document.getElementById('myinput');
// let output = document.getElementById('output');

// inpt.addEventListener('keypress', function(event){
    
//     if(event.key == 'Enter'){
//         output.innerHTML = output.innerHTML + event.target.value + ", ";
//         event.target.value = "";
//     }
// });


// inpt.addEventListener('blur', function(){
//     output.innerHTML = "Not Focused"
// });

// inpt.addEventListener('mouseover', function(){
//     inpt.focus()    
// });

// inpt.addEventListener('mouseout', function(){
//     inpt.blur()        
// });

// let item = document.querySelector('#item');
// let color = document.querySelector('#color');
// let border = document.querySelector('#border');
// let radious= document.querySelector('#radious');


// color.addEventListener('input', function(event){
//     let colorValue = event.target.value;

//     item.style.backgroundColor = colorValue;
// })

// border.addEventListener('input', function(event){
//     let borderValue = event.target.value;

//     item.style.border = `red solid ${borderValue}px`;
//     console.log(item.style.borderSize)
// })

// radious.addEventListener('input', function(event){
//     let radiousValue = event.target.value;

//     item.style.borderRadius = `${radiousValue}px`;
// })

let parent = document.getElementById('parent');
let childOne = document.createElement('p');
let childTwo = document.createElement('img');

childOne.classList.add('myClass');
childOne.style.height = '200px';
childOne.style.backgroundColor = '#fe76c9';


childTwo.width = "500";
childTwo.height = "300";
childTwo.src = "https://www.britannica.com/explore/savingearth/wp-content/uploads/sites/4/2019/03/bee-corridors-hero.jpg"


childTwo.addEventListener('click', (e) => {
    e.target.style.display = 'none'
})

parent.appendChild(childOne);
parent.appendChild(childTwo);
console.log(childTwo);


