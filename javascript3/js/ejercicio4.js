var arreglo1 = [];
var arreglo2 = [];
var tamanio = 0;
var nums = 0;
var matrix1 = " ";
var matrix2 = " ";

    function minime() {

                agregar();
            }

            function agregar(){

                var minum = prompt("Ingrese cualquier numero");

                if (minum == null || minum == "") {

                    calcular();

                } else {

                    arreglo1.push(minum);

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
                tamanio = arreglo1.length;

                if (tamanio < 5) {

                    alert("El arreglo debe de ser al menos 5 numeros enteros, Siga ingresando mas numeros!!!");

                    agregar();

                } else {

                    for (let j = 0; j < tamanio; j++) {

                        nums = parseFloat(arreglo1[j]);

                        matrix1 += arreglo1[j] + " ";

                        if (nums % 3 == 0 && nums != 0) {

                            arreglo2.push(j);
                        }
                    }

                    for (let k = 0; k < arreglo2.length; k++) {

                        matrix2 += arreglo2[k] + " ";        
                    }

                    document.getElementById("ar1").innerHTML = matrix1;
                    document.getElementById("ar2").innerHTML = matrix2;
                }
    }