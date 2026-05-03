const container = document.querySelector(".container");
const display = document.querySelector(".display");


const calculation = {
    firstNum: "",
    operator: "",
    secondNum: "",
    firstNumWasResult : false, 
    isInfinity: false, 
    dotInFirstNum : false, 
    dotInSecondNum : false, 

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

        
        return (Number.isFinite(result) ? ((Number.isInteger(result)) ? result : result.toFixed(2)) : "Nice Try!");
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
                    if(value === "." && calculation.firstNum.includes(".")){
                        return;
                    }
                    else{
                        calculation.firstNum += value
                        calculation.dotInFirstNum = true; 
                    };  
                    
                } 

                else if(calculation.firstNum && calculation.operator && !calculation.isInfinity){
                     if(value === "." && calculation.secondNum.includes(".")){
                        return;
                    }
                     else{calculation.secondNum += value}; 
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
                    if(typeof +result === "NaN"){
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

    if(typeof +result === "NaN"){
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






























