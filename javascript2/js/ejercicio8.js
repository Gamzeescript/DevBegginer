var suma = 0;
var countsum = 0;

function divisiblesum(){

    var numero1 = document.getElementById("num1").value;

    var num1 = parseInt(numero1);
    var mostrar = " ";

    document.getElementById("sum1").innerHTML = numero1;
    mostrarnum();

    function mostrarnum(){

        for(var i = 1; i <= 1000; i++){

            if(i <= 10){

                suma += num1;
            
                mostrar += suma + " ";

                countsum += suma;

               

            }

            document.getElementById("sum2").innerHTML = countsum;
            document.getElementById("sum3").innerHTML = mostrar;
            

        }

    }

    
          

}




           