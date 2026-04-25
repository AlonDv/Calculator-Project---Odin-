
const container = document.querySelector(".container");
const display = document.querySelector(".display");

function add(num1, num2){
    return num1 + num2; 
}


function subtract(num1, num2){
    return num1 - num2; 
}


function multiply(num1, num2){
    return num1 * num2; 
}


function divide(num1, num2){
    return num1 / num2; 
}

let firstNum = "";
let operator = ""; 
let secondNum = ""; 

container.addEventListener("click", assign);

function operate(operator, firstNum, secondNum){
    switch(operator){
        case "+":
            return add(+firstNum,+secondNum);
            
        
        case "-":
            return subtract(+firstNum,+secondNum); 

        case "*":
            return multiply(+firstNum, +secondNum);

        case "/":
            return divide(+firstNum, +secondNum); 
    }   
}



function assign(event){
    if(event.target.tagName == "BUTTON"){
        let button = event.target; 
        let value = button.value; 
        console.log(value); 
        
        
        switch(true){
            case button.classList.contains("numBtn"):
                if (!operator){
                    firstNum += value; 
                } 

                else if(firstNum && operator){
                    secondNum += value; 
                }
                 
                break;
                

            case button.classList.contains("redBtn"):
                if(!operator && firstNum){
                    operator = value; 
                }break;
        }  
        display.textContent = `${firstNum} ${operator} ${secondNum}`; 
    }

    if(firstNum && operator && secondNum){
        console.log(`${firstNum} ${operator} ${secondNum}`); 
        console.log(operate(operator, +firstNum, +secondNum));
    }
        
}


const equalBtn = document.querySelector("#equalBtn")
equalBtn.addEventListener("click", ()=>{
    let result = operate(operator, +firstNum, +secondNum);
    firstNum = result;
    secondNum = ""
    operator = ""; 
    display.textContent = `${result}`; 
})

console.log(operate()); 