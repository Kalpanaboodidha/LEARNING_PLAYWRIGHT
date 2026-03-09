let a = "Kalpana";

if(true){
    console.log(a); //local varaible , TDZ
    let a = "temp";
}
  /* TDZ - Temporal Dead Zone - It is the time between the start of the block and the point where the variable is declared. During this time, the variable is in a "dead zone" and cannot be accessed. If you try to access it, you will get a ReferenceError.
    In the above code, the variable 'a' is declared with 'let' inside the if block. Before the declaration, it is in the TDZ, and trying to access it will result in a ReferenceError. Once the variable is declared, it can be accessed without any issues. */
    