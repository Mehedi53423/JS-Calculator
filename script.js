const display = document.getElementById("display");
let operation = "";
let value = 0;

const ac = document.getElementById("ac").addEventListener("click", function(){
    display.innerText = "";
})

const zero = document.getElementById("zero").addEventListener("click", function(){
    display.innerText = display.innerText + 0;
})

const one = document.getElementById("one").addEventListener("click", function(){
    display.innerText = display.innerText + 1;
})

const two = document.getElementById("two").addEventListener("click", function(){
    display.innerText = display.innerText + 2;
})

const three = document.getElementById("three").addEventListener("click", function(){
    display.innerText = display.innerText + 3;
})

const four = document.getElementById("four").addEventListener("click", function(){
    display.innerText = display.innerText + 4;
})

const five = document.getElementById("five").addEventListener("click", function(){
    display.innerText = display.innerText + 5;
})

const six = document.getElementById("six").addEventListener("click", function(){
    display.innerText = display.innerText + 6;
})

const seven = document.getElementById("seven").addEventListener("click", function(){
    display.innerText = display.innerText + 7;
})

const eight = document.getElementById("eight").addEventListener("click", function(){
    display.innerText = display.innerText + 8;
})

const nine = document.getElementById("nine").addEventListener("click", function(){
    display.innerText = display.innerText + 9;
})

const plus = document.getElementById("plus").addEventListener("click", function(){
    value = parseInt(display.innerText);
    display.innerText = "";
    operation = "+"
})

const minus = document.getElementById("minus").addEventListener("click", function(){
    value = parseInt(display.innerText);
    display.innerText = "";
    operation = "-"
})

const divide = document.getElementById("divide").addEventListener("click", function(){
    value = parseInt(display.innerText);
    display.innerText = "";
    operation = "/"
})

const multi = document.getElementById("multi").addEventListener("click", function(){
    value = parseInt(display.innerText);
    display.innerText = "";
    operation = "*"
})

const equel = document.getElementById("equel").addEventListener("click", function(){
    if(operation === "+"){
        display.innerText = value + parseInt(display.innerText);
    }
    else if(operation === "-"){
        display.innerText = value - parseInt(display.innerText);
    }
    else if(operation === "/"){
        display.innerText = value / parseInt(display.innerText);
    }
    else if(operation === "*"){
        display.innerText = value * parseInt(display.innerText);
    }
})