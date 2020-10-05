function informacion(){

    var numero1 = document.getElementById("num1").value;
            

            if(numero1 > 2){


                document.getElementById("info1").innerHTML = numero1;
                document.getElementById("info2").innerHTML = (sumadigitos(numero1));
               

                mayormenor(numero1);
            
                
            }

            else {

                alert("la cifra debe ser mayor a 2");

            }
    }        


            /** Funciones muy a parte de mi codigo en JS */

             /** Funcion de sumar digitos de un numero */

                    function sumadigitos(numero1){

                        var num1 = parseInt(numero1);

                        var sumadigitos = 0;


                        while(num1){

                            sumadigitos += num1 % 10;
                            num1 = Math.floor(num1 / 10);

                        }

                        return sumadigitos;

                    }    

             /** funcion que delimita que numero es mayor y cual es menor de entre los digitos */


             function mayormenor(numero1){

                var numero1 = numero1.split("");
                
                var miarray = [];
                var snum1 = numero1.toString();
                for(var i = 0, longitud = snum1.length; i < longitud; i += 1){
            
                        miarray.push(+snum1.charAt(i));
                        console.log(miarray);
            
                        var maximo = miarray[0];
                        var minimo = miarray[0];
                        var sumapares = 0;
                        var sumaimpares = 0;
            
                        for(i = 0; i < miarray.length; i++){
            
                            if(miarray[i] < minimo){
            
                                minimo = miarray[i];
            
                            }
            
                            if(miarray[i] > maximo){
            
                                maximo = miarray[i];
                            }  
            
                            if(miarray[i] % 2 == 0){
            
                                sumapares += parseFloat(miarray[i]);
                            
                            
                             }
                            
                             if(miarray[i] % 2 == 1){
                            
                                 sumaimpares += parseFloat(miarray[i]);
                            
                            
                              }
                            
            
                        
                        } 
            
            
                }

                document.getElementById("info3").innerHTML = minimo;
                document.getElementById("info4").innerHTML = maximo;
                document.getElementById("info5").innerHTML = sumapares;
                document.getElementById("info6").innerHTML = sumaimpares;
            
            
            }
			
            




           