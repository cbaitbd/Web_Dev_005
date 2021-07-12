let display = document.querySelector('#display');
let btns = document.querySelectorAll('.btn');
let number1 = 0 , number2 = 0, operator = null;
let clearDisplay = false;


// let btnsArray = [...btns];

// display.onclick = () => {
//     alert("done")
// }
const btnClick = (event) => {

  

    if(event.target.classList.contains('digit')){ // Button is a digit
        
        if(display.innerHTML.length == 12){
            alert("Limit Crossed!")
            return;
        }

        if(clearDisplay){
            display.innerHTML = event.target.innerHTML;
            clearDisplay = false;
        }else{

            if(event.target.innerHTML == '.'){
                if(!display.innerHTML.includes(".")){
                    display.innerHTML = display.innerHTML  + event.target.innerHTML
                }
            }else{
                display.innerHTML = display.innerHTML  + event.target.innerHTML
            }
 
        }

    }else if(event.target.classList.contains('opr')){ // Button is a Operatior
        number1 = Number(display.innerHTML);
        operator = event.target.innerHTML;
        clearDisplay = true;
    }else if(event.target.classList.contains('equal')){
        number2 = Number(display.innerHTML);
        display.innerHTML = getResult();
        clearDisplay = true;
    }

    if(event.target.innerHTML == "D"){
        display.innerHTML = display.innerHTML.substr(0, display.innerHTML.length - 1);
    }

    if(event.target.innerHTML == "C"){
        reset();
    }
}

const reset = () => {
    number1 = 0;
    number2 = 0;
    operator = null;
    display.innerHTML = "";

}

const getResult = () => {
    let result = 0;

    if(operator == '+'){
        result = number1 + number2
    }else if( operator == '-'){
        result = number1 - number2
    }else if( operator == 'x'){
        result = number1 * number2
    }else if( operator == '÷'){
        result = number1 / number2
        result = result.toFixed(3)
    }

    return result;
}


;[...btns].forEach( btn => btn.addEventListener('click', btnClick));







