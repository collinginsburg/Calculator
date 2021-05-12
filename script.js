function subtraction (a,b){
    return a-b;
}
function add(a, b) {
    return a+b;
}
function multiply(a,b){
      return a*b;
}
function divide(a, b) {
    return a/b;
}

function operate(operation,a,b){

    if(operation === "add"){
        return add(a,b);
    }
    if(operation === "subtraction"){
        return subtraction(a,b);
    }
    if(operation === "multiply"){
        return multiply(a,b);
    }
    if(operation === "divide"){
        return divide(a,b);
    }

}