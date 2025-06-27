let calculator = document.querySelector(".calculator");
let numButton = document.querySelectorAll(".numButton");
let opButton = document.querySelectorAll(".opButton");
let clearButton = document.querySelector(".clearButton");
let eqButton = document.querySelector(".eqButton")
let display = document.querySelector(".display")
let displayTwo = document.querySelector(".displayTwo")

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

opButton.forEach(o => o.addEventListener("click", () => {if(!(testNumber === "") && !(prevtestNumber === "")){let a = prevtestNumber; let b = testNumber;
                                                              prevtestNumber = operate(a,b,oper); testNumber = "";oper = o.innerHTML; displayUpdate();displayTwoUpdate(); } else if(!(testNumber === "")){prevtestNumber = testNumber;
                                                              testNumber = "";
                                                              return oper = o.innerHTML, displayUpdate(), displayTwoUpdate();} else{ return oper = o.innerHTML,displayUpdate(),displayTwoUpdate();}}));
                                                         
eqButton.addEventListener("click",() => {let a = prevtestNumber;
                                         let b = testNumber;
                                         if (oper === "" || oper === "="){testNumber = testNumber}else{testNumber = operate(a,b,oper);
                                         prevtestNumber = "";displayUpdate();displayTwo.innerHTML = "";
                                         return oper = "="}});

clearButton.addEventListener("click",() => {return a = "", b = "", oper = "", testNumber = "", prevtestNumber = "", display.innerHTML = "0", displayTwo.innerHTML = "";})




