function iterar(){

      
    iterando();
    
}

function iterando(){

    let numero1 = document.getElementById("num1").value;
    let num1 = parseInt(numero1);

    let conteo = 0;
    let seroestar = "";

    if (num1 < 0) {

        if (num1 % 2 == 0) {

            for(let i = num1; i <= 1; i++){
            
                conteo += 1;
            
            }

            conteo -= 1;
                
            seroestar = "es par";

        } else { 

            for(let i = num1; i <= 1; i++){
            
                conteo += 1;
            
            }

            conteo -= 1;

            seroestar = "es impar";               
        }

    } else if (num1 > 0) {


        if (num1 % 2 == 0) {

            for(let i = 0; i < num1; i++){

                conteo += 1;
        
            }
        
            conteo -= 1;

            seroestar = "es par";

          
        } else {

            for(let i = 0; i < num1; i++){

                conteo += 1;
        
            }
        
            conteo -= 1;
            seroestar = "es impar";                
        }                      
    }

    document.getElementById("iteracion").innerHTML = conteo;
    document.getElementById("parimpar").innerHTML = seroestar;
    document.getElementById("ingreso").innerHTML = num1;


}





