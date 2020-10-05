var arraychar = [];
var char1= "";
var char2= "";

function procesar() {

    agregar();
}

function agregar(){

    var char = prompt("Ingrese una letra");

    if (char == null || char == "") {

        confirmacion();

    } else {

        arraychar.push(char);

        confirmacion();
    }
}

function confirmacion(){

    var r = confirm("Desea Continuar agregando?");

    if (r == true) {

        agregar();

    } else {

        caracter1();               
    }
}

function caracter1(){

    char1 = prompt("Ingrese el caracter 1");

    if (char1 == null || char1 == "") {

        alert("Agregue el caracter 1, Por favor!!!");

        caracter1();

    } else {

        caracter2();
    }            

}

function caracter2(){

    char2 = prompt("Ingrese el caracter 2");

    if (char2 == null || char2 == "") {

        alert("Agregue el caracter 2, Por favor!!!");

        caracter2();

    } else {

        calcular(arraychar, char1, char2);
    }            

}        

function calcular(myarray, car1, car2){

    var arraymod = [];
    var arreglo1 = " ";
    var arreglo2 = " ";            

    for (let i = 0; i < myarray.length; i++) {

        arraymod[i] = myarray[i];

        arreglo1 += myarray[i] + " ";
        
    }

    for (let j = 0; j < arraymod.length; j++) {

        if (arraymod[j] == car1) {

            arraymod[j] = car2;
        }

        arreglo2 += arraymod[j] + " ";

        
        
    }

    console.log(arreglo2);
    document.getElementById("am1").innerHTML = arreglo1;
    document.getElementById("car1").innerHTML = car1;
    document.getElementById("car2").innerHTML = car2;
    document.getElementById("am2").innerHTML = arreglo2;
    
}