var guardaarchivos = [];
var arreglofiltro;
var muestra = " ";

function busca() {
    agregar();
}

function agregar(){
    var archivo = prompt("Ingrese nombre del archivo");

    if (archivo == null || archivo == "") {

        calcular();

    } else {

        guardaarchivos.push(archivo);
        
        confirmacion();
    }
}

function confirmacion(){

    var answer = confirm("Desea Continuar agregando?");

    if (answer == true) {

        agregar();

    } else {

        calcular();               
    }
}

function calcular(){

        var len = "";

        arreglofiltro = guardaarchivos.filter(archivo => archivo.includes('.jpg'));

            var blong = arreglofiltro.length;
            
            if (blong >= 1) {

                for (let i = 0; i < guardaarchivos.length; i++) {
                    
                    muestra += guardaarchivos[i] + " ";                       
                }

                len = "["+ muestra +"] cantidad: "+ blong;

            } else {
                
                len = "No hay ninguna imagen jpg";
            }

            document.getElementById("archibaldo").innerHTML = len;
}