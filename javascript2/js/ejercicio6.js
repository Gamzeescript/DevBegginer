function fibo(){

    numero1 = document.getElementById("num1").value;
    var ingreso = parseInt(numero1);


    var fibon = [0, 7, 12, 17, 22, 27];

    var longst = fibon[5]; 
    const resto = fibon[2] - fibon[1];
    var misnumbers = "";
    var limite = 10000;

    if(numero1 > longst){

        elfibonacci();
    
    function elfibonacci(){

        for(i = longst; i <= ingreso - 1; i+=resto) {  
       
            var sec =  " ";
            sec  += i;       
            
            misnumbers += i + " ";
        }

        document.getElementById("f").innerHTML = misnumbers ;


    }

    } 

    else {

        alert("debe ser una cifra mayor al arreglo para ver la sucesion de ese array");

    }

}