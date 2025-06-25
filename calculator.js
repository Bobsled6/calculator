let calculator = document.querySelector(".calculator");
let screen = document.querySelector(".screen");
let prevScreen = document.querySelector(".prevScreen");
let numButton = document.querySelectorAll(".numButton");
let opButton = document.querySelectorAll(".opButton");
let clearButton = document.querySelector(".clearButton");
let eqButton = document.querySelector(".eqButton")

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
    return x / y;
};

let a;
let b;
let oper;

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

numButton.forEach(b => b.addEventListener("click",() => {if (oper === "="){screen.innerHTML = "";
                                                             screen.innerHTML += b.innerHTML;
                                                             oper = "";} 
                                                        else {screen.innerHTML += b.innerHTML}}));
opButton.forEach(b => b.addEventListener("click", () => {prevScreen.innerHTML = screen.innerHTML;
                                                         screen.innerHTML = "";
                                                         return oper = b.innerHTML;
                                                         }));
eqButton.addEventListener("click",() => {let a = prevScreen.innerHTML;
                                         let b = screen.innerHTML;
                                         screen.innerHTML = operate(a,b,oper);
                                         prevScreen.innerHTML = "";
                                         return oper = "="});
clearButton.addEventListener("click",() => {return a = "", b = "", oper = "", screen.innerHTML = "", prevScreen.innerHTML = "";})



