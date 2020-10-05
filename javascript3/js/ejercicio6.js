var arre1 = [];
var tam = 0;
var nums = 0;
var matriz1 = " ";
var agregado = [];

function unir() {

    agregar();
}

function agregar(){

    var minums = prompt("Ingrese cualquier numero");

    if (minums == null || minums == "") {
        calcular();
    } else {
        arre1.push(minums);
        confirmacion();
    }
}

function confirmacion(){
    var res = confirm("Desea Continuar agregando?");

    if (res == true) {
        agregar();
    } else {
        calcular();               
    }
}

function calcular(){
    tam = arre1.length;

    if (tam < 3) {

        alert("El arreglo debe de ser al menos 3 numeros enteros, ingrese mas cifras");

        agregar();

    } else {

        for (let j = 0; j < tam; j++) {

            nums = parseFloat(arre1[j]);

            matriz1 += arre1[j] + " ,";
            
        }

        agregado.push(matriz1, "taller", "kodigo");
        

        document.getElementById("cad1").innerHTML = matriz1;
        document.getElementById("cad2").innerHTML = agregado;
    }
}