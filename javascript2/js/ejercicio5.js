function concatena(){

    var total = 0;
    var sizes = 0;

    var myar = [];

    recurso();

        function recurso(){

        concatenacion();

        }

        

    function concatenacion(){

        var eleccion  = prompt("ingresa un numero");
        
        if(eleccion == null || eleccion == ""){

            alerta();
        }

        else {

            myar.push(eleccion);
            alerta();

        }
    }


    function alerta(){


        var continuar = confirm("Continuar agregando numeros?");

        if(continuar == true){

            concatenacion();
        }

        else {

            adicion();

        }
    }

    function adicion(){

        sizes = myar.length;

        for(let i = 0; i < sizes; i++) {

            total += parseFloat(myar[i]);
        }

       var tamanio = sizes + " " + "elementos";
       var sumita = " " + total;

       document.getElementById("con1").innerHTML = tamanio;
       document.getElementById("con2").innerHTML = sumita;

    }

    

        
}

