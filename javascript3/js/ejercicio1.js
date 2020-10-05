var mypar = 0;
var myimpar = 0;
var totalpar= [];
var totalimpar= [];
var aaryresu= [];
var mostrar = "";
var mostraroriginal = "";

function arreglo1(){

    var myarreglo = [];

    recurso();

        function recurso(){

        concatenacion();

        }

        

    function concatenacion(){

        var agregamas  = prompt("ingresa un numero");
        
        if(agregamas == null || agregamas == ""){

            alerta();
        }

        else {

            myarreglo.push(agregamas);
            alerta();

        }
    }


    function alerta(){


        var continua = confirm("Continuar agregando numeros?");

        if(continua == true){

            concatenacion();
        }

        else {

            operaciones();

        }
    }

    function operaciones(){

        sizes = myarreglo.length;

        for(let i = 0; i < sizes; i++) {

            if(myarreglo[i] % 2 == 0){

                totalpar.push(Math.pow(myarreglo[i], 2)) ;
                aaryresu[i] = Math.pow(myarreglo[i], 2);
            }

            if(myarreglo[i] % 2 == 1){
                totalimpar.push(Math.pow(myarreglo[i], 3))
                aaryresu[i] = Math.pow(myarreglo[i], 3);
            }  
            
            mostraroriginal += myarreglo[i] + ",";

        }

        
        document.getElementById("ar1").innerHTML = mostraroriginal
        
        mostrarres();

    }

    function mostrarres(){

        var sizespar = aaryresu.length;

        for (let j = 0; j < sizespar; j++) {
            
            mostrar += aaryresu[j] + ", ";
            
        }



        document.getElementById("ar2").innerHTML = mostrar;

        console.log(mostrar);
    
        
    }
}