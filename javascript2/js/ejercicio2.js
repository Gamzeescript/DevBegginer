function cadena(){

        var numero1 = document.getElementById("num1").value;

        var character = "";
        
        if(numero1 >= 3){

            character = '*#@'.repeat(numero1);

        } else if(numero1 > 0 && numero1 < 3){
            character = '*#@';

        } else { 

            alert("imposible de realizar");

        }

       
        var arreglochar = Array.from(character);

        var cadena = "";
       
        for (let i = 0; i < numero1; i++) {

            cadena += arreglochar[i] + " "; 
        }    

        
        document.getElementById("cad").innerHTML = cadena;


        }	