let calculator = document.querySelector(".calculator");
let screen = document.querySelector(".screen");
let numButton = document.querySelectorAll(".numButton");
let opButton = document.querySelectorAll(".opButton");
let clearButton = document.querySelector(".clearButton");

let add = function(x,y){
    return x + y;
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



