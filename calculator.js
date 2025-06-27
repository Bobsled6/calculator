let calculator = document.querySelector(".calculator");
let numButton = document.querySelectorAll(".numButton");
let opButton = document.querySelectorAll(".opButton");
let clearButton = document.querySelector(".clearButton");
let eqButton = document.querySelector(".eqButton");
let display = document.querySelector(".display");
let displayTwo = document.querySelector(".displayTwo");
let decimalButton = document.querySelector(".decimal");
let backButton = document.querySelector(".back");

let displayUpdate = function (){display.innerHTML = Math.round(testNumber * 100) / 100};
let displayTwoUpdate = function(){if (!((Math.round(prevtestNumber * 100) / 100) === 0)){displayTwo.innerHTML = Math.round(prevtestNumber * 100) / 100 + " " + oper}}


let add = function(x,y){
    return +x + +y;
};

let sub = function(x,y){
    return x - y;
};

let mult = function(x,y){
    return x * y;
};

let div = function(x,y){
    if(y === "0"){return "no";}
    else {return x / y;}
};

let a = "";
let b = "";
let oper = "";
testNumber = "";
prevtestNumber = "";

let operate = function(x,y,z){
    if (z === "+"){
        return add(x,y);
}   else if (z === "-"){
        return sub(x,y);
}   else if (z === "*"){
        return mult(x,y);
}   else if (z === "/"){
        return div(x,y);
}};

numButton.forEach(b => b.addEventListener("click",() => {if (oper === "="){testNumber = "";
                                                             testNumber += b.innerHTML;
                                                             oper = "";} 
                                                        else {testNumber += b.innerHTML} displayUpdate();displayTwoUpdate();}));

opButton.forEach(o => o.addEventListener("click", () => {if(!(testNumber === "") && !(prevtestNumber === "")){
                                                              let a = prevtestNumber; let b = testNumber;
                                                              prevtestNumber = operate(a,b,oper); 
                                                              testNumber = "";
                                                              oper = o.innerHTML; 
                                                              displayUpdate();
                                                              displayTwoUpdate();} 
                                                         else if(!(testNumber === "")){prevtestNumber = testNumber;
                                                              testNumber = "";
                                                              return oper = o.innerHTML, displayUpdate(), displayTwoUpdate();} else{ return oper = o.innerHTML,displayUpdate(),displayTwoUpdate();}}));
                                                         
eqButton.addEventListener("click",() => {let a = prevtestNumber;
                                         let b = testNumber;
                                         if (oper === "" || oper === "="){testNumber = testNumber}else{testNumber = operate(a,b,oper);
                                         prevtestNumber = "";displayUpdate();displayTwo.innerHTML = "";
                                         return oper = "="}});

clearButton.addEventListener("click",() => {return a = "", b = "", oper = "", testNumber = "", prevtestNumber = "", display.innerHTML = "0", displayTwo.innerHTML = "";})

decimalButton.addEventListener("click",() => {if(testNumber % 1 === 0){testNumber += "."} displayUpdate();})

backButton.addEventListener("click",() => {if(!(testNumber === "") && !(oper === "=")) {testNumber = testNumber.slice(0,-1), displayUpdate();}})

document.addEventListener('keydown', (e) => {if (document.activeElement != document.body) {
    document.activeElement.blur()}
    if (e.key === "=" || e.key === "Enter"){{let a = prevtestNumber;
                        let b = testNumber;
                        if (oper === "" || oper === "=")
                            {testNumber = testNumber}
                        else{testNumber = operate(a,b,oper);
                             prevtestNumber = "";
                             displayUpdate();
                             displayTwo.innerHTML = "";
                             return oper = "="}}} 
    else if((e.key === "+") || (e.key === "-") || (e.key === "*") || (e.key === "/"))
                        {if(!(testNumber === "") && !(prevtestNumber === "")){
                                    let a = prevtestNumber; 
                                    let b = testNumber;
                                    prevtestNumber = operate(a,b,oper); 
                                    testNumber = "";
                                    oper = e.key; 
                                    displayUpdate();
                                    displayTwoUpdate();} 
                        else if(!(testNumber === ""))
                                    {prevtestNumber = testNumber;
                                     testNumber = "";
                                     return oper = e.key, 
                                     displayUpdate(), 
                                     displayTwoUpdate();} 
                        else{ return oper = e.key,displayUpdate(),displayTwoUpdate();}}
    else if((e.key >= 0) && (e.key <= 9))
                        {if (oper === "="){testNumber = "";
                             testNumber += e.key;
                             oper = "";} 
                        else {testNumber += e.key} displayUpdate();displayTwoUpdate();}
    else if(e.key === "."){if(testNumber % 1 === 0){testNumber += "."} displayUpdate();}                
    else if(e.key === "Backspace"){if(!(testNumber === "")  && !(oper === "=")) {testNumber = testNumber.slice(0,-1), displayUpdate();}}
    else if(e.key === "Escape"){return a = "", b = "", oper = "", testNumber = "", prevtestNumber = "", display.innerHTML = "0", displayTwo.innerHTML = "";} });
    

