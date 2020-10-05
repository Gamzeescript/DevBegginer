function ordenar(){

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

    var ordenario = [num1, num2, num3, num4, num5, num6];

    var original_orden = [num1, num2, num3, num4, num5, num6];



        ordenario.sort(function(a, b){return a-b});

        let estado = 0;

        for(var i=0;i<ordenario.length;i++){

            for(var j=0;j<ordenario.length;j++)
            {
                if(ordenario[i] == original_orden[j]){
                    estado++;
                    document.getElementById("ord").innerHTML = "ordenado";

                }
                else {

                    document.getElementById("ord").innerHTML = "no ordenado";

                }
            }
        }
        
       

    }
             
