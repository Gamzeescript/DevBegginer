var micadena = "";

function procesar(){

    var numero1 = document.getElementById("num1").value;
    var num1 = parseInt(numero1);
    var numero2 = document.getElementById("num2").value;
    var num2 = parseInt(numero2);
    var numero3 = document.getElementById("num3").value;
    var num3 = parseInt(numero3);
    var numero4 = document.getElementById("num4").value;
    var num4 = parseInt(numero4);
    var numero5 = document.getElementById("num5").value;
    var num5 = parseInt(numero5);
    var numero6 = document.getElementById("num6").value;
    var num6 = parseInt(numero6);
    var numero7 = document.getElementById("num7").value;
    var num7 = parseInt(numero7);
    var numero8 = document.getElementById("num8").value;
    var num8 = parseInt(numero8);
    var numero9 = document.getElementById("num9").value;
    var num9 = parseInt(numero9);
    var numero10 = document.getElementById("num10").value;
    var num10 = parseInt(numero10);
    var numero11 = document.getElementById("num11").value;
    var num11 = parseInt(numero11);
    var numero12 = document.getElementById("num12").value;
    var num12 = parseInt(numero12);


    
    maymen();

    
    function maymen(){

        var arreglo = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12];

        var longest = arreglo.length;

        var may = arreglo[0];
        var men = arreglo[0];
        var menres = 0;
        var mayres = 0;


        for(var i = 0; i < longest; i ++){

            if(arreglo[i] < men){
            
                men = arreglo[i];
                menres = arreglo.indexOf(men);
                

            }

            if(arreglo[i] > may){

                may = arreglo[i];
                mayres = arreglo.indexOf(may);
            }   



           micadena += arreglo[i] + ",";

            
        }


        document.getElementById("cadenita").innerHTML = micadena;
        document.getElementById("menor").innerHTML = men + "en la posicion: " + menres;
        document.getElementById("mayor").innerHTML = may + "en la posicion: " + mayres;


    }





}