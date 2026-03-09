var a = "Kalpana";

if(true){
    console.log(a);
    var a = "temp";
    console.log(a);
}
/* In the above code, the variable 'a' is declared with 'var' inside the if block. Due to hoisting, the declaration of 'a' is moved to the top of the block, but its assignment remains in place. Therefore, when we try to access 'a' before its assignment, it will be undefined. After the assignment, it will have the value "temp". */
