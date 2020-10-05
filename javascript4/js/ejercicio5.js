var cantPI= 0;
var dias= 0;

function procesar() {
    
    CantidadPersonasInfectadas();

}

function CantidadPersonasInfectadas() {

    cantPI = prompt("Ingrese la cantidad de Personas Infectadas");

            if (cantPI == null || cantPI == "") {

                alert("Agregue la cantidad de Personas Infectadas, Por favor!!!");

                CantidadPersonasInfectadas();

            } else {

                NumerosDias();
            }            

        }

        function NumerosDias(){

            dias = prompt("Ingrese la cantidad de Dias");

            if (dias == null || dias == "") {

                alert("Agregue la cantidad de Dias, Por favor!!!");

                NumerosDias();

            } else {

                covidExp(cantPI, dias);
            }            

        }        

        function covidExp(cantPersonaInfectadas, numeroDias){

            var sqrt = 0;
            var resultado = 0;

            sqrt = Math.pow(cantPersonaInfectadas,2);

            resultado = sqrt * numeroDias;

            var txt = "covidExp("+ cantPersonaInfectadas +","+ numeroDias +") = "+ resultado;

            document.getElementById("dat1").innerHTML = cantPersonaInfectadas;
            document.getElementById("dat2").innerHTML = numeroDias;
            document.getElementById("dat3").innerHTML = resultado;
        }