const container = document.querySelector(".container");
const display = document.querySelector(".display");


const calculation = {
    firstNum: "",
    operator: "",
    secondNum: "",
    firstNumWasResult : false, 
    isInfinity: false, 
    dotIsCurrent: false, 

    add(){
        return (+this.firstNum + +this.secondNum)
    },

    subtract(){ 
        return (+this.firstNum - +this.secondNum); 
    },

    multiply(){
        return (+this.firstNum * +this.secondNum); 
    },

    divide(){
        return (+this.firstNum / +this.secondNum);
    },

    toPower(){
        return (Number(this.firstNum) ** Number(this.secondNum));
    },


    operate(){
        let result = null; 

        switch(this.operator){
            case "+":
                result = this.add();
                break;  

            case "-":
                result = this.subtract(); 
                break; 

            case "*":
                result = this.multiply()
                break;
            
            case "/":
                result = this.divide();
                break;

            case "^":
                result = this.toPower();
                break;
        }

        return (Number.isFinite(result) ? result : "Nice Try!");
    }

}




container.addEventListener("click", assign);

function assign(event){
    if(event.target.tagName == "BUTTON"){
        let button = event.target; 
        let value = button.value;

            if(button.classList.contains("numBtn")){



                if(calculation.isInfinity || calculation.firstNumWasResult && !calculation.operator){
                    calculation.isInfinity = false; 
                    calculation.firstNumWasResult = false; 
                    calculation.firstNum = value;
                    calculation.secondNum = "";
                    calculation.operator = "";
                }
                else if (!calculation.operator && !calculation.firstNumWasResult && !calculation.isInfinity){
                    calculation.firstNum += value; 
                } 

                else if(calculation.firstNum && calculation.operator && !calculation.isInfinity){
                    calculation.secondNum += value; 
                }
                display.textContent = `${calculation.firstNum} ${calculation.operator} ${calculation.secondNum}`; 
            }

                

            else if(button.classList.contains("redBtn")){
                if(!calculation.operator && calculation.firstNum && !calculation.isInfinity){
                    calculation.operator = value; 
                    display.textContent = `${calculation.firstNum} ${calculation.operator} ${calculation.secondNum}`;
                }
                else if( calculation.firstNum && calculation.operator && calculation.secondNum){
                    const result = calculation.operate();
                    if(typeof result === "string"){
                        display.textContent = result;
                        calculation.firstNum = "";
                        calculation.secondNum = "";
                        calculation.operator = ""; 
                        calculation.isInfinity = true; 
                    }

                    else{
                        calculation.firstNum = result;
                        calculation.secondNum = "";
                        calculation.operator = value; 
                        display.textContent = `${calculation.firstNum} ${calculation.operator} ${calculation.secondNum}`;
                    }

                }
            
        }  
    }

    
        
}


const equalBtn = document.querySelector("#equalBtn")
equalBtn.addEventListener("click", ()=>{
    let result = calculation.operate();
    calculation.firstNum = result;
    calculation.secondNum = ""
    calculation.operator = ""; 
    calculation.firstNumWasResult = true; 
    display.textContent = `${result}`; 

    if(typeof result === "string"){
        calculation.isInfinity = true;
    }
})


const clearBtn = document.querySelector("#clearBtn");

clearBtn.addEventListener("click" , ()=>{
    calculation.firstNum = "";
    calculation.secondNum = "";
    calculation.operator = "";
    display.textContent = "";
    calculation.firstNumWasResult = false; 
    calculation.isInfinity = false; 
})

































// const container = document.querySelector(".container");
// const display = document.querySelector(".display");

// function add(num1, num2){
//     return num1 + num2; 
// }


// function subtract(num1, num2){
//     return num1 - num2; 
// }


// function multiply(num1, num2){
//     return num1 * num2; 
// }


// function divide(num1, num2){
//     return num1 / num2; 
// }

// function toPower(num1, num2){
//     return num1 ** num2;
// }

// let firstNum = "";
// let operator = ""; 
// let secondNum = ""; 
// let wasResult = false; 
// let allowButtons = true; 


// container.addEventListener("click", assign);

// function operate(operator, firstNum, secondNum){
//     let result = null; 
//     switch(operator){
//         case "+":
//             result = add(+firstNum,+secondNum);
//             break; 
        
//         case "-":
//             result =  subtract(+firstNum,+secondNum); 
//             break; 

//         case "*":
//             result = multiply(+firstNum, +secondNum);
//             break; 
//         case "/":
//             result =  divide(+firstNum, +secondNum); 
//             break;

//         case "^":
//             result = toPower(+firstNum, +secondNum); 
//             break;
        
//     }   

//     if(!(Number.isFinite(result))){
//         result = "Nice Try";
//         firstNum = ""; 
//         secondNum = "";
//         operator = ""; 
//         display.textContent = result;
//         allowButtons = false; 
//     }

//     else{
//         return result = (Number.isInteger(result) ? result : result.toFixed(2)); 
//     }
    
// }





// function assign(event){
//     if(event.target.tagName == "BUTTON"){
//         let button = event.target; 
//         let value = button.value; 

//             if(button.classList.contains("numBtn")) {
//                 allowButtons = true; 
//                  if (!operator && allowButtons){
//                     firstNum += value; 
//                 } 

//                 else if(firstNum && operator && allowButtons){
//                     secondNum += value; 
//                 }

//                 display.textContent = `${firstNum} ${operator} ${secondNum}`;
//             }
               
                
                

//             else if(button.classList.contains("redBtn")){
//                 if(!operator && firstNum && allowButtons){
//                     operator = value;
//                 }
//                  else if(operator && secondNum && allowButtons){
//                     const result = operate(operator, firstNum, secondNum);
//                     wasResult = true; 
//                     display.textContent = result; 
//                     }

//                     else{
//                         operator = button.value; 
//                         firstNum = result;
//                         secondNum = "";
//                         display.textContent = `${firstNum} ${operator} ${secondNum}`;
//                     }
                    
//                 }

                
//             } 

//             else return; 


                
        

        

        
//     } 
    



// const equalBtn = document.querySelector("#equalBtn")
// equalBtn.addEventListener("click", ()=>{
//     if(firstNum && operator && secondNum){
//         let result = (operate(operator, firstNum, secondNum));
//         if(typeof result === "string"){
//             display.textContent = result;
//             secondNum = ""; 
//             operator = ""; 
//             firstNum = ""; 
//         }

//         else{
//             firstNum = result;
//             secondNum = ""
//             operator = ""; 
//             display.textContent = `${firstNum}`; 
            
//         }

//     }

// })

// const clearBtn = document.querySelector("#clearBtn");
// clearBtn.addEventListener("click",()=>{
//     firstNum = "";
//     secondNum = "";
//     operator = ""; 
//     display.textContent = ""; 
// }) 
